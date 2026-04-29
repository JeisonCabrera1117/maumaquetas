import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <a
        href="#gallery"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-amber-500 text-white px-4 py-2 rounded-md z-50"
      >
        Ir al contenido principal
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;