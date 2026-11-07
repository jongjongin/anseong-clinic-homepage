# 홈페이지 건강정보 글(아티클) 기획안 — 네이버 블로그 → anseong365.com 재작성 게시

작성 2026-10-25. 조사 기반 기획안이며 코드 변경 없음. 원장 결정 항목은 9절.

## 1. 결론 요약

- 홈페이지에 블로그형 글은 **없다**. `/blog` 는 네이버 RSS 최신 12건을 카드로 보여주고 네이버로 내보내는 링크만 있다. 사이트맵 31개 URL 중 글 URL 0개.
- AEO(답변엔진 최적화) 관점의 현재 상태: **기술 기반은 양호, 콘텐츠가 없다.** JSON-LD(MedicalClinic·Service·Offer·FAQPage·Breadcrumb)·서버 렌더·canonical·robots·sitemap 은 갖춰졌다. 그러나 AI 가 인용할 "사실 단위 글"(증상·치료·회차·주의사항·근거·저자·검토일)이 도메인 안에 없다.
- 네이버 블로그 225편은 AI 검색엔진에 **전혀 보이지 않는다.** blog.naver.com robots.txt 가 GPTBot·OAI-SearchBot·PerplexityBot·ClaudeBot·Google-Extended 를 전부 막고 "AI 학습·RAG 접근 금지" 를 명시한다. 2026-09 국내 실측(답변 2만 1천 건)에서도 네이버 블로그는 ChatGPT·Gemini 인용 0건이었다. → 홈페이지 재작성 게시는 AEO 에서 유일한 길이다.
- 중복 처리 원칙: 구글은 "페널티" 가 아니라 "하나만 고르기" 라서 거의 같은 글이면 **홈페이지판이 묻힌다.** 네이버는 유사문서 판독을 2025-02 LLM 으로 강화해 "조금 바꾼 복사본" 을 걸러낸다. 따라서 **문장 바꾸기가 아니라 같은 주제로 새 글을 쓰는 방식**이어야 한다. 225편을 LLM 으로 한 번에 변환해 쏟아내면 구글 2024-03 "대량 생성 콘텐츠" 스팸 정책에 정확히 걸린다 → 사람 승인·분산 발행이 필수.
- 의료법: 자체 홈페이지는 사전심의 대상 매체가 아니지만(시행령 24조 일일 10만 명 기준) **56조 금지 규정은 전부 적용**된다. 치료경험담·효과 보장·비교·근거 없는 명칭·부작용 축소·불명확한 할인 표기 금지. 네이버 블로그 쪽은 반대로 사전심의 대상이다.
- 비용은 작다. LLM 재작성 일회성 약 $10~40(Max 월 $100 크레딧 안), 이후 월 $1 미만. 저장소·이미지·슬랙은 무료 한도 안. 공수는 약 13~15 사람-일(AI 코딩팀 기준), 달력 3~4주 + 원장 승인 시간.

## 2. 현재 상태 점검 (2026-10-25 실측)

| 항목 | 상태 |
|---|---|
| 자체 글 페이지 | 없음. `app/blog/page.tsx` → `components/home/blog-section.tsx` 가 `lib/naver-blog.ts` RSS 12건을 외부 링크 카드로 표시 |
| JSON-LD | 전 페이지 MedicalClinic+LocalBusiness, 홈 WebPage/WebSite, `/services/[slug]` FAQPage+Breadcrumb, `/menu/[slug]` Service+Offer(부가세 포함 표기) |
| 없는 스키마 | Article/BlogPosting, author, datePublished/dateModified, reviewedBy/lastReviewed, Person(원장) |
| 의료진 | 홈 앵커 섹션만. 원장별 URL 없음 |
| 사이트맵 | 31 URL, lastmod 전부 빌드 시각으로 동일(신호 가치 없음). RSS 피드(`/feed.xml`) 없음. `/llms.txt` 없음 |
| robots.txt(실서버) | 클라우드플레어 관리형 블록이 끼어 있음: 학습봇 35종 Disallow(GPTBot·ClaudeBot·Google-Extended 포함), `Content-Signal: search=yes, ai-train=no`. GPTBot·ClaudeBot UA 접속은 엣지에서 403 |
| 검색봇 실제 접속 | OAI-SearchBot(ChatGPT 검색)·PerplexityBot·Claude-SearchBot·Yeti·Googlebot·bingbot 전부 200 → **AI 검색 노출에는 지장 없음.** 학습봇 차단은 검색 노출과 무관(각사 공식 문서) |
| 도메인 | 네임서버가 클라우드플레어 → R2 이미지 커스텀 도메인(img.anseong365.com) 바로 가능 |
| 서비스 페이지 본문 | "함께 살핍니다" 류 일반 문장 위주. 척추관절 페이지 약 3,000자에 구체 수치 0. FAQ 답변도 짧음 |

## 3. 원천 콘텐츠 규모 (실측)

| 블로그 | 글 수 | 연도 | 카테고리 |
|---|---|---|---|
| jonginyoun113 | 202 | 2023년 4·2024년 28·2025년 104·2026년 66 | 통증추나 45·한의원 소식 34·경옥고공진단 23·기타진료 21·미용 17·보약 16·교통사고 13·다이어트 11·소아성장 9·진료 7·여성질환 6 |
| anseong365khclinic | 23 | 2023년 3·2024년 3·2025년 1·2026년 16 | 특수질환 9·통증질환 6·소아성장 3·소화기 2·기타 3 |

- 진료일정·개원·현수막 등 소식류 약 27편 + "한의원 소식" 카테고리 → **재작성 제외, 진료 안내 페이지 하나로 통합.** 이벤트·후기·전후사진·할인 글도 제외.
- 실제 재작성 대상은 약 **160~170편**.
- 수집 가능성: RSS 는 최신 50건·요약 350자만. 전체 목록은 `PostTitleListAsync.naver`(페이지당 30, totalCount 제공, robots 비차단). 본문은 `m.blog.naver.com/{id}/{logNo}` 서버 렌더 HTML 의 `se-main-container`(소제목·문단·이미지 구조 보존). 서버 노트북 `C:/bridge/scripts/blog_corpus.py` 가 이미 같은 방식으로 본문을 뽑는다.
- 이미지: pstatic 은 외부 Referer 로 403(핫링크 불가). `blogfiles.pstatic.net/...` 에서 `?type=` 을 떼면 원본 → 내려받아 WebP 로 재호스팅 필수.

## 4. 목표와 성공 기준

| 목표 | 측정 |
|---|---|
| 네이버 웹문서·구글 색인에 글 URL 등재 | 서치어드바이저·GSC 색인 수(목표: 발행 글의 90% 이상) |
| 네이버 유사문서 판정 회피 | 발행 1개월 뒤 네이버 검색 '유사문서' 영역 표본 점검, 묶인 글 비율 10% 이하 |
| AI 답변 인용 | 월 1회 같은 질문 세트("안성 추나 한의원", "안성 교통사고 한의원", "안성 기미 토닝", "안성 365일 한의원" 등 10개)를 네이버 AI 브리핑·구글 AI 모드·ChatGPT·Perplexity 에서 확인·기록. 단회 판단 금지 |
| 전환 | GA4 generate_lead 중 `/blog/*` 유입 비율 |

현실적 기대치: 네이버 "건강 AI 브리핑"(질환·시술명 검색)은 상급병원·학회·건보공단 자료만 쓴다고 공식 발표했다. 동네 한의원이 "추나란?" 에 인용될 가능성은 낮고, **"안성 + 증상/시술" 롱테일**과 **플레이스·지도 정보 정합성**이 현실적 목표다.

## 5. 콘텐츠 정책 (재작성 규칙)

### 5-1. 중복 회피
1. 제목을 바꾼다(핵심 명사 1~2개 외 겹치지 않게). 네이버는 동일 제목 자체를 불이익 요소로 안내.
2. 도입부 300자는 완전히 새로 쓴다(안성 환자가 실제로 묻는 질문으로 시작, 첫 2~3문장에 답).
3. 구조를 바꾼다: 네이버(이미지 중심·대화체·Hook→Problem→치료→생활가이드) → 홈페이지(질문형 H2 4~6개·표·요약 박스·FAQ 3~5개). 네이버 지침 `guideline.md` 와 **다른 지침**을 쓴다.
4. 새 정보 3가지 이상: 안성 지역 정보(진료시간·주차·교통사고 서류 절차 등 사실만), 원장 검토 코멘트, FAQ, 근거 문헌 링크(학회·심평원·질병관리청), 가격표 페이지 링크.
5. 사진은 네이버와 다른 파일(크롭·캡션 변경 또는 자체 사진). 네이버 유사문서 정의에 사진 구성요소가 포함된다.
6. 기계 검사 통과 기준(우리 설정값, 공식 기준 아님): 문자 5-gram 자카드 ≤ 0.20, 최장 공통 부분문자열 < 25자(시술명·주의문 화이트리스트 제외), 원문 문장과 겹치는 문장 비율 < 10%. 첫 20건을 사람이 보고 보정.
7. 홈페이지 글은 self-canonical + Article JSON-LD. 네이버를 가리키는 canonical 금지. "출처: 네이버 블로그" 대신 본문 끝 "관련 글(블로그)" 링크 1개.
8. 과거 글은 네이버 원본이 이미 수집돼 있어 순서 무관. 새 글은 9절 결정 사항.

### 5-2. 의료법 56조·원장 지침
- 치료경험담·후기·사례·리뷰 캡처 금지(익명화해도 "구체적 경험+예후" 면 동일).
- 효과 보장·단정("완치", "반드시", "부작용 없음"), 비교·비방("양방보다", "타 한의원과 달리"), 근거 없는 명칭("척추 전문", "○○ 마스터"), 인증·추천 표기 금지.
- 부작용·주의사항은 본문과 같은 글씨 크기로. 미용 시술 글은 부작용 블록 필수.
- 가격은 본문에 숫자로 쓰지 않고 가격표 페이지(`lib/menu-items.ts`·`lib/beauty-menu.ts` 근거) 링크로. 할인은 정가·할인액·대상·기간·범위 전부 명시 없으면 금지. 무료 체험·선착순·동반 혜택·리뷰 조건 금지(27조 3항 유인).
- **편평사마귀 "부가세 면제" 표기 금지**(원장 정정 2026-09-10). 자동 검사에서 `면세|부가세 면제` 가 미용 단어와 같은 문단에 있으면 실패 처리.
- 환부 사진·전후 사진은 5요건(동일인·시기 명시·무보정·부작용 명시·자기 기관 환자) 못 채우면 제외. 기존 블로그 환부 사진은 기본 제외.
- 토닝 적응증 병변은 듀얼토닝을 주 시술로 안내.
- 글 끝 고지 한 줄: "AI 도움으로 초안을 작성하고 한의사가 검토·수정했습니다." (구글 '어떻게 만들었나' 고지, 국내 AI 표시제 대비)

### 5-3. 신뢰 요소(E-E-A-T)
- 바이라인: 실명 + 한의사 + 소속, 저자 프로필 페이지(`/doctors/[slug]`) 링크. "의학적 검토: ○○○ 한의사, 검토일 YYYY-MM-DD".
- 최초 게시일·최종 수정일 표시 + Article JSON-LD(author.name/url, datePublished, dateModified). MedicalWebPage(lastReviewed·reviewedBy) 병기 가능(효과는 미확인, 무해).
- 참고문헌 2개 이상(공공·학회).
- 연 1회 재검토로 dateModified 갱신.

## 6. 시스템 설계

```
[네이버 블로그 2개]
   RSS 30~60분 폴링(공식 피드) → 새 logNo 감지 / 백필 1회: PostTitleListAsync 전 페이지(1~2초 간격)
   ▼
[원내 서버 노트북 · Python 워처 blog_mirror]  (국내 IP, 기존 금지어 체커·슬랙 봇·.env 키 재사용)
   1 수집   m.blog.naver.com/{id}/{logNo} → SmartEditor ONE 파서 → 블록 JSON (원본 HTML 보관)
   2 이미지 blogfiles 원본 → EXIF 제거·WebP 1200/480 → Cloudflare R2 (img.anseong365.com/articles/{slug}/)
   3 재작성 Claude Sonnet 5.5 구조화 JSON → Haiku 5.5 심사 → 필요 시 1회 재작성(상한 2회)
   4 검사   유사도(자카드·LCS·문장 겹침) / 금지어·가격 숫자·부가세·체험담 / 필수 요소(FAQ≥3, H2≥4)
   5 승인   Slack Socket Mode 카드 [승인 발행][수정 요청][반려] (+선택: Cloudflare Access 뒤 미리보기)
   6 발행   POST anseong365.com/api/articles/publish (Bearer 비밀값)
   ▼
[Vercel · Next.js 16.4]
   upsert articles/article_versions(Neon) → revalidateTag('articles',{expire:0}) → revalidatePath(/blog, /sitemap.xml, /feed.xml)
   → after(): IndexNow 핑(네이버·빙 공유) + 슬랙 완료 알림
   /blog(목록·카테고리) · /blog/[slug] (generateStaticParams + revalidate 86400) · /doctors/[slug]
   /sitemap.xml(DB lastModified) · /feed.xml · /{indexnow-key}.txt
   JSON-LD: Article(+MedicalWebPage) + FAQPage + BreadcrumbList + Person
   ▼
[Neon Postgres · 무료]  naver_posts · articles · article_versions · article_checks
[Cloudflare R2 · 무료]   이미지 (egress 무료)
```

설계 근거
- **실행 위치는 원내**: Vercel Hobby cron 은 하루 1회·±59분이라 감지용 부적합. 네이버 요청을 해외 IP(Vercel)에서 보내는 것도 불리. 기존 블로그 자동화(워처·금지어 체커·Codex)와 한 곳에 둔다.
- **본문은 Neon + 온디맨드 ISR**: 승인·수정·롤백이 "DB 행 상태 변경 + 태그 무효화" 로 끝난다. 글마다 배포 불필요. MDX+PR 방식은 원장에게 깃허브 화면이 필요하고, 헤드리스 CMS 는 로그인 화면을 다시 만든다(2026-10-18 홈페이지 로그인 삭제 결정과 충돌). 보조로 주 1회 JSON 덤프를 저장소 `content/backup/` 에 커밋.
- **이미지는 R2**: Vercel Blob 은 Advanced 작업 월 2,000건이라 1,100장 업로드로 소진(과거 사고 재발). R2 무료 10GB·egress 무료, 도메인이 이미 클라우드플레어. Next `<Image>` 는 `unoptimized`(Vercel 변환 쿼터 월 5천 회피).
- **상태는 Neon 한 곳에만**(저장소 목록 조회를 폴링에 쓰지 않음).
- `cacheComponents`/`"use cache"` 는 켜지 않음(켜면 `revalidate`·`dynamicParams` 세그먼트 설정이 사라짐). `revalidateTag` 는 Next 16 에서 2번째 인자 필수.
- 기존 `/blog` 네이버 카드 섹션은 "네이버 최신 글" 로 하단에 유지.

### 6-1. 데이터 모델 초안
```
naver_posts(blog_id, log_no PK, title, category_no, category_name, add_date, fetched_at, raw_html, status)
articles(id, slug UNIQUE, source_log_no, title, summary, body_json, faq_json, keywords[], category,
         author_slug, reviewed_by, reviewed_at, hero_image, status, published_at, updated_at)
article_versions(article_id, version, body_json, edited_by, created_at)
article_checks(article_id, version, jaccard, lcs_chars, overlap_ratio, banned_terms[], price_hits[], passed)
status: fetched → rewritten → checked → pending → approved → published / rejected / edited → published(v+1)
```

### 6-2. 재작성 프롬프트 골격(원내 지침 파일, 네이버 guideline.md 와 별도)
- 시스템(캐시): 역할(안성경희365한의원 건강정보 편집자), 절대 규칙(5-2), 문체(짧은 문장·한 줄·가독성), 출력 JSON 스키마.
- 변환 지시: 질문형 소제목 4~6 · 첫 문단에 답 · 순서 "증상 → 원인 → 한의원에서 보는 것 → 생활 관리 → 내원 기준" · FAQ 3~5 · 안성 맥락 1~2문장(사실만) · 체험담 제거 · 의학 사실·시술명·주의사항 보존 · 원문 10자 이상 연속 일치 금지 · 가격은 `{{price:slug}}` 토큰만.
- 출력: `title, slug, summary(≤80자), sections[{heading, paragraphs[]}], faq[{q,a}], keywords[], category, sourceLogNo, imagesUsed[]`.
- 2단계 심사(Haiku): 사실 왜곡·금지 표현·베끼기 판정 JSON → 실패 시 지시 붙여 1회 재작성.

## 7. 단계별 계획

| 단계 | 내용 | 공수 | 산출물 |
|---|---|---|---|
| 0 준비 | 원장 결정(9절)·계정: 네이버 서치어드바이저 등록·소유확인, R2 버킷+img 도메인, 슬랙 앱 Socket Mode 토큰, Vercel 환경변수(ARTICLE_PUBLISH_SECRET·INDEXNOW_KEY), 클라우드플레어 Access(선택) | 0.5일 + 원장 | 체크리스트 |
| 1 발행면 | `/blog`, `/blog/[slug]`, `/doctors/[slug]`, Article·Person JSON-LD, 사이트맵 DB 연동·실제 lastmod, `/feed.xml`, IndexNow 키·핑, publish API, Neon 테이블 | 3.5일 | 빈 상태로 배포(색인 전) |
| 2 수집·재작성 | 수집기·파서·이미지 파이프, 재작성·심사·검사기, 표본 20건 → 원장 검토로 프롬프트·임계값 보정 | 5.5일 | 표본 20건 보고(유사도 수치·금지어 0건) |
| 3 승인 루프 | 슬랙 카드·모달(수정 지시·문장 수정)·반려, 발행 후 한 문장 고치기 | 1.5일 | 슬랙 승인 1건 실전 |
| 4 백필 | 160~170편을 Batch API 로 야간 생성 → 카테고리별 묶음으로 승인 → **주 15~20편씩 분산 발행(약 2~3개월)** | 2일 + 원장 글당 1~2분 | 월별 발행 보고 |
| 5 자동화 | RSS 폴링 → 새 글 자동 재작성 → 슬랙 승인 → 발행. 소식류는 자동 분류로 제외 | (3단계에 포함) | 스위치 `automation_flags/blog_mirror` |
| 6 보강·측정 | 서비스 8페이지 사실 단위 보강, `/menu/*` FAQ 본문 추가, 월 1회 AI 인용 점검, 분기 유사문서 점검, 주간 JSON 백업, 노션 매뉴얼 | 2일 | 노션 매뉴얼(기능 완료 기준) |

합계 약 13~15 사람-일(Codex·agy 구현, Claude 검수). 원장 가용성이 낮은 10월 말~11월 초를 피해 승인 작업은 11월 중순 이후 분산.

## 8. 비용·리스크

| 항목 | 금액 |
|---|---|
| Claude API | 일회성 $10~40(Sonnet 5.5 225편 약 $17, 배치 시 약 $8), 이후 월 $1 미만 |
| Cloudflare R2·Access·Tunnel / Neon / Slack | $0(무료 한도 안) |
| Vercel | 현재 Hobby $0. **약관상 상업 사이트는 Pro $20/월 대상**(이 프로젝트와 무관하게 이미 있는 문제) |

| 리스크 | 완화 |
|---|---|
| 네이버 약관 "자동화 수단으로 게시물 수집 금지" → 최악 블로그 계정 이용 제한 | 본인 저작물·공개 글·1회성·1~2초 저속·우회 없음. 감지는 공식 RSS. `m.blog /api/` 는 카테고리 1회만. 429·캡차 시 즉시 중단. 고객센터 문의 기록. **원장 결정 사항** |
| 구글 "대량 생성 콘텐츠" 판정 | 사람 승인 필수, 주 15~20편 분산, 소식류 제외로 문서 수 억제, 글마다 새 정보 3개 |
| 네이버 유사문서 판정 | 5-1 규칙 + 기계 검사, 발행 1개월 뒤 표본 점검, 묶이면 재작성 깊이 상향(원본반영 신청은 하지 않음) |
| 의료법 표현 통과 | 결정론 검사 + Haiku 심사 + 원장 승인 3중. 금지어 목록은 기존 체커와 단일 소스 |
| 가격·부가세 오기 | 본문 가격 숫자 금지(링크 대체), 부가세 면제 표현 자동 실패 |
| 네이버 DOM 변경 | 원본 HTML 보관·재파싱, 파싱 실패율 슬랙 보고 |
| 비용 폭주 | 글당 재작성 2회 상한, 일일 예산 플래그, 백필은 Batch API |
| 서버 노트북 부하 | 백필은 진료시간 외 야간, 임베딩 검사는 선택 |
| 원장 가용성 | 슬랙 카드 한 장 승인, 카테고리 묶음 승인 옵션, 자동 발행 없음 |

## 9. 원장 결정 사항

**원장 답(2026-10-25)**: 1 수집 진행 / 2 A안(네이버 먼저 → RSS 감지 → 홈페이지 재작성) / 3 소식·일정·이벤트 제외 동의 / 4 AI 고지 문구 넣지 않음(바이라인·검토일은 유지) / 5 승인 = 혼합(첫 20편 글별 → 과거 글 묶음, 새 글 글별) / 6 Vercel Pro 전환 안 함(Hobby 유지) / 7 R2 진행, 설정은 클로드가 ego 브라우저로 직접 / 8 학습봇 차단 현 설정 유지.


1. **수집 방식 리스크 수용** — 네이버 약관 문언(자동 수집 금지)을 알고 진행할지. 대안은 글 저장(PDF) 수동 내보내기인데 225편엔 비현실적.
2. **새 글 발행 순서** — (A) 요청대로 네이버 발행 → RSS 감지 → 홈페이지 재작성(네이버 원본이 먼저 수집되므로 블로그 쪽 불이익은 낮음, 홈페이지판은 충분히 달라야 함) / (B) 홈페이지 먼저 → 색인 확인 뒤 네이버 짧은 버전(구글·네이버 모두 홈페이지가 원본이 되지만 네이버 블로그 운영 방식이 바뀜). 권고: 당분간 (A), 홈페이지 색인이 안정되면 (B) 검토.
3. **범위** — 소식·일정·이벤트·후기류 제외(약 55~60편)에 동의하는지. 제외 글은 진료 안내 페이지로 요약 통합.
4. **저자 표기** — 글마다 원장 실명 바이라인 + 검토일 + "AI 초안·한의사 검토" 고지. 부원장 글은 누구 이름으로 할지(원 블로그 작성자 기준 권고).
5. **승인 방식** — 글마다 슬랙 카드 vs 카테고리 묶음 승인(백필 한정). 발행은 승인 없이는 절대 안 함.
6. **Vercel Pro 전환**($20/월) — 상업 사이트 약관 문제. 이 기획과 별개로 결정 필요.
7. **클라우드플레어 R2 계정** — 결제수단 등록 요구 가능(미확인). 원장 계정으로 버킷 생성.
8. **AI 학습봇 차단 유지 여부** — 현재 GPTBot·ClaudeBot·Google-Extended 차단은 검색 노출과 무관하므로 유지 가능. `Content-Signal` 에 `ai-input=yes` 추가는 선택.

## 10. 조사 근거(요약)

- 구글: AI 기능에 "특별한 마크업·AI 파일 불필요", 구조화 데이터는 보이는 본문과 일치(2025-12). 도움이 되는 콘텐츠·YMYL 신뢰 가중(2026-10). FAQ 리치결과 2026-05 종료(마크업은 무해). 중복은 페널티 아님·대표 URL 하나 선택(2026-07). 신디케이션은 canonical 로 해결 안 됨(2023). 대량 생성 콘텐츠 스팸 정책(2024-03, 2026-08 갱신).
- 연구: 프린스턴 GEO(출처 인용·인용문·통계 추가 시 생성엔진 가시성 +30~40%, 키워드 반복 무효). Ahrefs(AI 개요 언급과 브랜드 웹 언급 상관 0.664). 국내 실측 2026-09(네이버 블로그=네이버 AI 브리핑 출처 46.5%, ChatGPT·Gemini 0건, 구조화만으로는 인용률 중립선 이하).
- 네이버: 멀티출처 AI 브리핑은 네이버가 수집한 웹문서 전제. 건강 AI 브리핑은 상급병원·학회·건보공단 자료(2025-10, 2026-06 시술명 확대). 유사문서 정의(2016)·LLM 판독 강화(2025-02). IndexNow 지원 2023-07(엔드포인트 searchadvisor.naver.com/indexnow). `nosourceinfo` 메타 금지(AI 출처 설명 생성 차단). 이용약관(2026-10-01): 게시물 권리는 작성자, 자동 수집 금지.
- 법령(law.go.kr 원문): 의료법 56조 2항(2026-10-02 시행), 57조, 27조 3항, 45조, 시행령 23조·24조(인터넷 매체 일일 10만 명 기준), 시행규칙 42조의2. 복지부 『건강한 의료광고, 우리가 함께 만들어요(2판)』(2024-12, 2025-12 수정): 의학정보 게시물은 유인 목적이면 광고, 치료경험담·전후사진 5요건·할인 표기 요건.
- 기술: Vercel Hobby cron 하루 1회·비상업 전용, Blob Advanced 2,000/월, 이미지 변환 5천/월. R2 10GB·egress 무료. Neon Free. Slack Socket Mode·Block Kit 무료. Claude 가격(2026-10-25): Haiku 5.5 $0.10/$0.50, Sonnet 5.5 $2/$10, Opus 5.5 $4/$20 (입력/출력 per M, 배치 50%). Next 16: revalidateTag 2번째 인자 필수, cacheComponents 끈 상태 유지, after() stable.
- 미확인: 네이버 서치어드바이저 구조화 데이터 가이드(조회 시 500), 복지부 '자체 홈페이지 광고 세부 기준 고시' 제정 여부, 유사도 공식 임계치(없음), R2 결제수단 요구, 한국어 토큰 비율(집행 전 count_tokens 로 표본 측정).
