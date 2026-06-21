import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import CEO from "./components/CEO/CEO";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import WhatsAppButton from "./components/WhatsApp/WhatsApp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <CEO />
      <Contact />
      <Testimonials />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
