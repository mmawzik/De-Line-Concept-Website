import { useEffect } from "react";
import { AppProviders } from "./providers";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Foshan } from "./components/foshan";
import { Journey } from "./components/journey";
import { Portfolio } from "./components/portfolio";
import { Team } from "./components/team";
import { SocialProofMarquee } from "./components/social-proof-marquee";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { PrivacyOverlay } from "./components/privacy";

export default function App() {
  useEffect(() => {
    document.title = "De Line — Custom Furniture Sourcing & Manufacturing | Foshan";
  }, []);

  return (
    <AppProviders>
      <div style={{ background: "var(--deline-bg)", minHeight: "100dvh" }} className="dl-themed">
        <Nav />
        <main>
          <Hero />
          <Foshan />
          <Team />
          <Journey />
          <Portfolio />
          <SocialProofMarquee />
          <Contact />
        </main>
        <Footer />
        <PrivacyOverlay />
      </div>
    </AppProviders>
  );
}
