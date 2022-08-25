import About from "./components/About/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/HeroLandingPage/Header";
import Prizes from "./components/Prizes/Prizes";
// import SponserFinal from "./components/Sponsors/SponsorFinal";
import Stats from "./components/statistics/Stats";
import Timeline from "./components/Timeline/Timeline";
import Track from "./components/Track/Track";
import bgWeb from "./assets/bg-final.png";
import { Routes,Route } from "react-router-dom";



import "./App.css";
// import Loader from "./components/Loading/Loader";
import Loader from "./components/Loaders/Loader";
import { useState } from "react";
import FAQ from "./components/FAQ/FAQ";
import {
  BronzeSponsors,
  GoldSponsors,
  PlatinumSponsors,
  SilverSponsors,
} from "./components/Sponsor/sponsor";
import Team from "./components/team/Team";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return <Loader />;
  }
  return (
    
    !loading && (
      <div className="App">
       
        <Header />
       
       

        <div className="blob" style={{ backgroundImage: `url(${bgWeb})` }}>
          <About />
          <Stats />
          <Track />
          <Prizes />
          {/* <Timeline /> */}
          {/* <SponserFinal /> */}
          <PlatinumSponsors />
          <GoldSponsors />
          <SilverSponsors />
          <BronzeSponsors />
          <FAQ />
          <Footer />
        </div>
      </div>
    )
  );
}

export default App;
