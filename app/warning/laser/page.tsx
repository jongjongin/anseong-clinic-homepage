import { permanentRedirect } from "next/navigation";

export default function LegacyLaserWarningPage() {
  permanentRedirect("/beauty#lesion-removal");
}
