import FlowingText from "@/components/FlowingText";
import { Biyahe, LandingPage, ROI } from "./";

export default function Home() {
  return (
    <>
      <LandingPage />
      <FlowingText message="Kumusta, kapadyak? 👋" />
      <Biyahe />
      <ROI />
    </>
  );
}
