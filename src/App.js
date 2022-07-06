import About from "./components/About/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/HeroLandingPage/Header";
import SponserFinal from "./components/Sponsors/SponsorFinal";
import Stats from "./components/statistics/Stats";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Stats />
      <SponserFinal/>
      <Footer />
    </div>
  );
}

export default App;
