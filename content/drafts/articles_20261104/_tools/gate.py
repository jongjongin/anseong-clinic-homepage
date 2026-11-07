# -*- coding: utf-8 -*-
"""41번 이후 승인표 게이트. 검사기 통과 + 의학 검증 '판정: 통과' 인 글만 APPROVAL.md 에 올린다.

사용: python -I -X utf8 _tools/gate.py        # CHECKS.json·_verify_*.md 를 읽어 APPROVAL.md 의 41번 이후 표를 다시 만든다

_verify_*.md 형식(글마다):
  ## 41
  판정: 통과 | 보류 (사유)
  확인 포인트: 원장이 볼 한 줄
"""
import glob, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
MARK = "<!-- 41번 이후: gate.py 가 생성 -->"


def verdicts():
    out = {}
    for f in glob.glob(os.path.join(ROOT, "_verify_*.md")):
        t = open(f, encoding="utf-8").read()
        for m in re.finditer(r"^## (\d{2,3})\b(.*?)(?=^## \d{2,3}\b|\Z)", t, re.S | re.M):
            b = m.group(2)
            v = re.search(r"^판정:\s*(.+)$", b, re.M)
            p = re.search(r"^확인 포인트:\s*(.+)$", b, re.M)
            if v:
                out[int(m.group(1))] = (v.group(1).strip(), p.group(1).strip() if p else "")
    return out


def main():
    checks = {int(r["n"]): r for r in json.load(open(os.path.join(ROOT, "CHECKS.json"), encoding="utf-8"))}
    idx = {i["n"]: i for i in json.load(open(os.path.join(ROOT, "_sources", "index.json"), encoding="utf-8"))}
    vs = verdicts()
    rows, held = [], []
    for n in sorted(k for k in idx if k >= 41):
        r, v = checks.get(n), vs.get(n)
        if not r or not r["passed"]:
            held.append((n, idx[n]["title"], "검사 미통과: " + ("; ".join(r["problems"]) if r else "초안·검사 없음")))
        elif not v:
            held.append((n, r["title"], "의학 검증 기록 없음"))
        elif not v[0].startswith("통과"):
            held.append((n, r["title"], v[0]))
        else:
            s = idx[n]
            rows.append(f"| [ ] | {n} | [{r['title']}]({r['file']}) | {r['category']} | {s['blogId']} · {s['date']} | "
                        f"{r['jaccard']:.3f} | {r['lcs']}자 | {r['overlap']:.0%} | {v[1]} |")
    parts = [MARK, "", "---", "", "## 41번 이후 (검사기 통과 + 의학 검증 통과만)", "",
             "| 승인 | 번호 | 제목 | 분류 | 원문(블로그·작성일) | 자카드 | 공통 연속 | 겹침 문장 | 확인 포인트 |",
             "|---|---|---|---|---|---|---|---|---|"] + rows
    parts += ["", f"올린 글 {len(rows)}편, 보류 {len(held)}편.", ""]
    if held:
        parts += ["### 보류(승인표에 올리지 않음)", ""] + [f"- {n} {t} — {w}" for n, t, w in held] + [""]
    p = os.path.join(ROOT, "APPROVAL.md")
    t = open(p, encoding="utf-8").read()
    t = t.split(MARK)[0].rstrip() + "\n\n"
    open(p, "w", encoding="utf-8").write(t + "\n".join(parts))
    print("올림", len(rows), "보류", len(held))
    for h in held:
        print("  보류", h[0], str(h[2])[:90])


if __name__ == "__main__":
    main()
