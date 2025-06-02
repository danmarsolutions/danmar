import Hero from "./sections/hero";
import Services from "./sections/services";
import Portfolio from "./sections/portfolio";
import Team from "./sections/team";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Footer />
    </>
  );
}
