# -*- coding: utf-8 -*-
"""홈페이지 재작성 초안 검사기 (기획안 homepage_articles_plan_20261025.md 5-1·5-2 기준).

사용:  python -I check_articles.py            # 초안 폴더의 NN_*.md 전부 검사 → CHECKS.json·CHECKS.md 갱신
       python -I check_articles.py 07          # 한 편만

기준(우리 설정값, 공식 기준 아님)
  - 원문 대비 문자 5-gram 자카드 <= 0.20
  - 원문과 최장 공통 부분문자열 < 25자
  - 원문과 겹치는 문장 비율 < 10% (문장의 5-gram 이 절반 넘게 원문에 있으면 겹침)
  - 의료법 금지어 0건 (원내 블로그 금지어 목록 BANNED + 홈페이지용 추가분)
  - 본문에 가격 숫자·할인·이벤트 없음, '면세/부가세 면제' 없음, AI 고지 문구 없음
  - 구조: 질문형 H2 4~6, FAQ 3~5, 참고 자료 2개 이상, 미용 글은 부작용·주의 블록
"""
import ast, difflib, json, os, re, sys

HERE = os.path.dirname(os.path.realpath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(ROOT, "_sources")
BLOG_CODEX = r"C:\bridge\scripts\blog_codex.py"   # 금지어 단일 소스(읽기만 함)

EXTRA_BANNED = ["보장", "완벽", "기적적", "기적의", "기적이", "기적 같", "특효", "부작용이 없", "부작용 없", "부작용은 없", "최고", "최상", "유일", "1등",
                "국내 최", "독보적", "확실히", "영구", "재발 없", "타 한의원", "다른 한의원", "양방보다", "병원보다",
                "후기", "경험담", "치료 사례", "호전 사례", "전후 사진", "전후 비교", "비포", "애프터", "척추 전문",
                "추나 전문", "마스터", "내원하세요", "방문하세요", "예약하세요", "문의하세요", "연락주세요"]
PRICE_RE = re.compile(r"\d[\d,\.]*\s*(?:만\s*원|천\s*원|원(?![인문])|만원)|할인|이벤트|무료|선착순|특가|프로모션")
TAX_RE = re.compile(r"면세|부가세\s*면제|부가가치세\s*면제")
AI_RE = re.compile(r"\bAI\b|인공지능|초안을 작성|생성형")
BEAUTY = {"피부", "미용"}
LCS_WHITELIST = ["LDMLocalDynamicMicromassage"]   # 고유 기술명·시술명: 공통 연속 길이 계산에서 제외


def load_banned():
    try:
        tree = ast.parse(open(BLOG_CODEX, encoding="utf-8").read())
        for n in tree.body:
            if isinstance(n, ast.Assign) and any(getattr(t, "id", "") == "BANNED" for t in n.targets):
                return [str(x) for x in ast.literal_eval(n.value)]
    except Exception as e:  # 원내 파일이 없는 PC 에서도 돌게
        print("금지어 원본 읽기 실패, 추가 목록만 사용:", e)
    return []


def norm(s):
    return re.sub(r"[^0-9A-Za-z가-힣]", "", s)


def grams(s, n=5):
    return {s[i:i + n] for i in range(len(s) - n + 1)}


def split_draft(path):
    t = open(path, encoding="utf-8").read().replace("\r\n", "\n")
    m = re.match(r"---\n(.*?)\n---\n(.*)", t, re.S)
    fm, body = (m.group(1), m.group(2)) if m else ("", t)
    meta = {}
    for ln in fm.splitlines():
        if ":" in ln and not ln.startswith(" "):
            k, v = ln.split(":", 1)
            meta[k.strip()] = v.strip().strip('"')
    return meta, body


def sentences(text):
    text = re.sub(r"^#+\s.*$", "", text, flags=re.M)
    text = re.sub(r"[*>|\-]", " ", text)
    return [s.strip() for s in re.split(r"(?<=[.!?다요죠])\s+|\n+", text) if len(norm(s)) >= 12]


def check(num):
    drafts = [f for f in os.listdir(ROOT) if f.startswith(f"{num}_") and f.endswith(".md")]
    if not drafts:
        return None
    path = os.path.join(ROOT, drafts[0])
    meta, body = split_draft(path)
    src = open(os.path.join(SRC, f"{num}.txt"), encoding="utf-8").read()
    s_norm = norm(src)
    body_nr = re.sub(r"## 참고.*?(?=\n## |\Z)", "", body, flags=re.S)   # 서지 목록은 유사도 계산에서 제외
    d_text = (meta.get("title", "") + "\n" + body_nr)
    d_norm = norm(d_text)
    sg, dg = grams(s_norm), grams(d_norm)
    jac = len(sg & dg) / max(1, len(sg | dg))
    d_lcs, s_lcs = d_norm, s_norm
    for w in LCS_WHITELIST:
        d_lcs, s_lcs = d_lcs.replace(w, ""), s_lcs.replace(w, "")
    sm = difflib.SequenceMatcher(None, d_lcs, s_lcs, autojunk=False)
    lm = sm.find_longest_match(0, len(d_lcs), 0, len(s_lcs))
    lcs = lm.size
    lcs_text = d_lcs[lm.a:lm.a + lm.size]
    sents = sentences(body_nr)
    ov = 0
    ov_list = []
    for s in sents:
        g = grams(norm(s))
        if g and len(g & sg) / len(g) > 0.5:
            ov += 1
            ov_list.append(s[:60])
    overlap = ov / max(1, len(sents))
    banned = sorted({w for w in load_banned() + EXTRA_BANNED if w in d_text})
    price = sorted({m.group(0) for m in PRICE_RE.finditer(body)})
    tax = bool(TAX_RE.search(d_text))
    ai = sorted({m.group(0) for m in AI_RE.finditer(d_text)})
    h2 = [l[3:].strip() for l in body.splitlines() if l.startswith("## ")]
    faq_i = next((i for i, h in enumerate(h2) if "자주" in h or "FAQ" in h), None)
    ref_i = next((i for i, h in enumerate(h2) if "참고" in h), None)
    info_i = next((i for i, h in enumerate(h2) if "안내" in h and "안성" in h), None)
    main_h2 = [h for i, h in enumerate(h2) if i not in (faq_i, ref_i, info_i)]
    qh2 = sum(1 for h in main_h2 if re.search(r"[?]|까요|나요|걸까요|일까요|할까요|인가요", h))
    faq_n = len(re.findall(r"^\*\*Q\.", body, re.M))
    refs = len(re.findall(r"^- ", body.split("## 참고")[-1], re.M)) if "## 참고" in body else 0
    risk_block = any(("부작용" in h or "주의" in h) for h in h2)
    beauty = meta.get("category", "") in BEAUTY
    problems = []
    if jac > 0.20: problems.append(f"자카드 {jac:.3f} > 0.20")
    if lcs >= 25: problems.append(f"공통 연속 {lcs}자 >= 25 ('{lcs_text[:30]}…')")
    if overlap >= 0.10: problems.append(f"겹치는 문장 {overlap:.0%} >= 10%")
    if banned: problems.append("금지어 " + ",".join(banned))
    if price: problems.append("가격·할인 표현 " + ",".join(price))
    if tax: problems.append("면세/부가세 면제 표현")
    if ai: problems.append("AI 고지 문구 " + ",".join(ai))
    if not (4 <= len(main_h2) <= 6): problems.append(f"본문 H2 {len(main_h2)}개(4~6)")
    if qh2 < max(3, len(main_h2) - 1): problems.append(f"질문형 H2 {qh2}/{len(main_h2)}")
    if not (3 <= faq_n <= 5): problems.append(f"FAQ {faq_n}개(3~5)")
    if refs < 2: problems.append(f"참고 자료 {refs}개(2+)")
    if beauty and not risk_block: problems.append("미용 글인데 부작용·주의 블록 없음")
    for k in ("reviewedBy", "reviewedAt", "author"):
        if k not in meta: problems.append(f"front matter {k} 없음")
    return {"n": num, "file": drafts[0], "title": meta.get("title", ""), "category": meta.get("category", ""),
            "jaccard": round(jac, 3), "lcs": lcs, "overlap": round(overlap, 3), "chars": len(norm(body)),
            "h2": len(main_h2), "faq": faq_n, "refs": refs, "passed": not problems, "problems": problems, "overlap_sentences": ov_list}


def main():
    nums = sys.argv[1:] or sorted({f.split("_")[0] for f in os.listdir(ROOT) if re.match(r"\d{2,3}_.*\.md$", f)}, key=int)
    rows = [r for r in (check(n) for n in nums) if r]
    cj = os.path.join(ROOT, "CHECKS.json")
    old = {}
    try:
        old = {r["n"]: r for r in json.load(open(cj, encoding="utf-8"))}
    except Exception:
        pass
    old.update({r["n"]: r for r in rows})   # 일부만 돌려도 나머지 결과를 지우지 않고 합친다
    tmp = cj + f".{os.getpid()}.tmp"     # 여러 작업이 동시에 돌아도 깨지지 않게 교체 저장
    json.dump([old[k] for k in sorted(old, key=int)], open(tmp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    os.replace(tmp, cj)
    for r in rows:
        print(f"{r['n']} {'OK ' if r['passed'] else 'FAIL'} J={r['jaccard']:.3f} LCS={r['lcs']:>2} ov={r['overlap']:.0%} "
              f"h2={r['h2']} faq={r['faq']} ref={r['refs']} {r['title'][:28]}  {'; '.join(r['problems'])}")
        if not r["passed"] and r["overlap_sentences"]:
            for x in r["overlap_sentences"][:8]:
                print("     겹침:", x)
    print(f"통과 {sum(r['passed'] for r in rows)}/{len(rows)}")


if __name__ == "__main__":
    main()
