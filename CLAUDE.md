# 안성경희365한의원 홈페이지

Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4 (CSS-first, `app/globals.css`의 `@theme`).
Vercel 배포, Neon Postgres, 상담 신청은 슬랙 알림.

## 원장 확인 사항 (절대 어기지 말 것)

- **편평사마귀는 부가세 면제가 아니다.** 미용 시술 전체가 과세 대상이다.
  "질병 치료라 부가세 면제" 같은 표기를 어디에도 넣지 말 것.
  (2026-09-10 원장 직접 정정)
- 가격·시술 내용은 원장이 준 가격표(`lib/menu-items.ts`, `lib/beauty-menu.ts`)가 유일한 근거다.
  임의로 만들어 넣지 말 것.
- 병변 감별 내용은 원장 직원교육자료 「① 병변 구분」이 근거다 (`lib/skin-check.ts`).
- 듀얼토닝이 대표 시술이다. 토닝이 적응증인 병변은 듀얼토닝을 주 시술로 안내한다.
  (듀얼토닝 = 제네시스로 진피를 데운 뒤 1064nm 토닝)

## 콘텐츠 원칙

- 가독성 최우선. 본문 `#454545`, 보조 `#5f5f5f` 이상. `#a0a0a0` 같은 옅은 회색 금지.
- 문구는 짧게. 한 줄에 들어오게.
- 모바일 우선. 퀴즈는 스크롤 없이 한 화면에 들어오게 한다.
- 실제 사진은 상업적 이용이 가능한 것만 (Pexels, Wikimedia CC BY/BY-SA). CC 표기 필수.

## 주의

- `app/globals.css`의 `a { color: inherit }`은 `@layer base` 안에 있어야 한다.
  레이어 밖에 두면 링크의 `text-*` 유틸리티를 전부 덮어써서 글자가 안 보인다.
- 개발/배포: `claude/homepage-design-ux-apply-tzu3d7` 브랜치에서 작업 후 main에 ff-merge.
