import { PseoLandingPage } from "@/components/PseoLandingPage";
import { buildLandingMetadata, getHomeLandingPage } from "@/app/lib/pseo";

export const revalidate = 3600;

const page = getHomeLandingPage();
export const metadata = buildLandingMetadata(page);

export default function HomePage() {
  return <PseoLandingPage page={page} />;
}
