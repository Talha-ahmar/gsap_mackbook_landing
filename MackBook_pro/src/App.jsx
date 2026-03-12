import Navbar from "./componenets/Navbar.jsx";
import Hero from "./componenets/Hero.jsx";
import ProductViewer from "./componenets/Productviewer.jsx";
import Showcase from "./componenets/Showcase.jsx";
import Performance from "./componenets/Performence.jsx";
import Features from "./componenets/Features.jsx";
import Highlights from "./componenets/Highlights.jsx";
import Footer from "./componenets/Footer.jsx";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
