import Hero from "./sections/hero";
import Services from "./sections/services";
import Portfolio from "./sections/portfolio";
import Testimonials from "./sections/testimonials";
import Team from "./sections/team";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
