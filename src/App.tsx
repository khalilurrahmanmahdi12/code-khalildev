import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyChoose from "./components/sections/WhyChooseUs";
import Pricing from "./components/sections/Pricing";
import Workflow from "./components/sections/Workflow";
import Faq from "./components/sections/Faq";
import Cta from "./components/sections/Cta";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <section id="why-choose" className="scroll-mt-24">
          <WhyChoose />
        </section>

        <section id="pricing" className="scroll-mt-24">
          <Pricing />
        </section>

        <section id="workflow" className="scroll-mt-24">
          <Workflow />
        </section>

        <section id="faq" className="scroll-mt-24">
          <Faq />
        </section>

        <section id="contact">
          <Cta />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;