import { Hero } from "@/components/Hero";
import { BusinessShowcase } from "@/components/BusinessShowcase";
import { Services } from "@/components/Services";
import { SpeakerCallout } from "@/components/SpeakerCallout";
import { AboutNotepad } from "@/components/AboutNotepad";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessShowcase />
      <Services />
      <SpeakerCallout />
      <AboutNotepad />
    </>
  );
}
