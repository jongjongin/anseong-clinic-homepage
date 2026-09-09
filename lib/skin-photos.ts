import type { SkinResultKey } from "@/lib/skin-check";

/**
 * 병변 실제 사진.
 * 상업적 이용이 가능한 자료만 사용한다.
 * - Wikimedia Commons: CC BY / CC BY-SA → 저작자·라이선스 표기 필수
 * - Pexels: 표기 의무 없음
 */
export type SkinPhoto = {
  src: string;
  alt: string;
  /** 사진 아래에 표기할 출처 (CC 조건 충족용) */
  credit: string;
};

export const skinPhotos: Partial<Record<SkinResultKey, SkinPhoto>> = {
  seborrheic: {
    src: "/assets/skin-check/real/seborrheic.webp",
    alt: "피부에 도톰하게 올라온 갈색 검버섯",
    credit: "Assafn / Wikimedia Commons · CC BY-SA 4.0",
  },
  lentigo: {
    src: "/assets/skin-check/real/lentigo.webp",
    alt: "손등에 생긴 경계가 뚜렷한 평평한 흑자",
    credit: "HaleBopp / Wikimedia Commons · CC BY-SA 4.0",
  },
  melasma: {
    src: "/assets/skin-check/real/melasma.webp",
    alt: "볼에 경계가 흐릿하게 퍼진 기미",
    credit: "Elord / Wikimedia Commons · CC BY-SA 3.0",
  },
  freckle: {
    src: "/assets/skin-check/real/freckle.webp",
    alt: "볼에 작게 흩어져 있는 주근깨",
    credit: "Pexels",
  },
  "flat-wart": {
    src: "/assets/skin-check/real/flat-wart.webp",
    alt: "턱 주변에 여러 개 생긴 편평사마귀",
    credit: "Hassan et al. / Wikimedia Commons · CC BY 4.0",
  },
  milium: {
    src: "/assets/skin-check/real/milium.webp",
    alt: "볼에 하얗게 비쳐 보이는 비립종",
    credit: "Masryyy / Wikimedia Commons · CC BY-SA 4.0",
  },
};
