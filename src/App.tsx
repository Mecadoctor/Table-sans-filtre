import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { GsapScrollBand } from "./components/GsapScrollBand";
import { Concept } from "./components/Concept";
import { AboutAlex } from "./components/AboutAlex";
import { GuestsPreview } from "./components/GuestsPreview";
import { Episodes } from "./components/Episodes";
import { InvitesFull } from "./components/InvitesFull";
import { ProposerSection } from "./components/ProposerSection";
import { InviteSection } from "./components/InviteSection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="landing landing--podcast landing--tsf">
      <Nav />
      <Hero />
      <GsapScrollBand />
      <Concept />
      <AboutAlex />
      <GuestsPreview />
      <Episodes />
      <InvitesFull />
      <ProposerSection />
      <InviteSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
