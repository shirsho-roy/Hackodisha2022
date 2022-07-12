import About from "./components/About/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/HeroLandingPage/Header";
import Prizes from "./components/Prizes/Prizes";
import SponserFinal from "./components/Sponsors/SponsorFinal";
import Stats from "./components/statistics/Stats";
import Timeline from "./components/Timeline/Timeline";
import Track from "./components/Track/Track";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Stats />
      <Track/>
      <Prizes/>
      <Timeline/>
      <SponserFinal/>
      <Footer />
    </div>
  );
}

export default App;
