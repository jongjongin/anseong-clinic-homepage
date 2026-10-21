/**
 * 구조화 데이터(JSON-LD)를 서버 HTML에 그대로 넣는다.
 * next/script 로 넣으면 자바스크립트가 돈 뒤에야 붙어서 네이버 검색 로봇이 못 읽는다.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // "<" 를 이스케이프해 </script> 로 태그가 끊기는 일을 막는다
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
