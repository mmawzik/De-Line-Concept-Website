import { useEffect } from "react";
import { AppProviders } from "./providers";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Foshan } from "./components/foshan";
import { Journey } from "./components/journey";
import { Portfolio } from "./components/portfolio";
import { Team } from "./components/team";
import { SocialProof } from "./components/social-proof";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

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
          <Journey />
          <Portfolio />
          <Team />
          <SocialProof />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProviders>
  );
}
