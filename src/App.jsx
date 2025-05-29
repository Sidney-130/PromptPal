import About from "./Components/About";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Marketplace from "./Components/Marketplace";
import Pricing from "./Components/Pricing";
import Resources from "./Components/Resources";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-10 lg:px-30">
        <HeroSection />
        <About />
        <Marketplace />
        <Pricing />
        <Resources />
      </div>
      <Footer />
    </>
  );
}

export default App;
