import { Routes } from "react-router-dom";
// import "./App.scss";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Design from "./component/Design/Design";
import Footer from "./component/Footer/Footer";
import Landing from "./component/Landing/Landing";
import Navigation from "./component/Navigation/Navigation";
import Portfolio from "./component/Portfolio/Portfolio";
import Pricing from "./component/Pricing/Pricing";
import Quote from "./component/Quote/Quote";
import Services from "./component/Services/Services";
import Skills from "./component/Skills/Skills";
import Stats from "./component/Stats/Stats";
import Subscribe from "./component/Subscribe/Subscribe";
import Video from "./component/Video/Video";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <Services />
      <Design />
      <Portfolio />
      <Video />
      <About />
      <Stats />
      <Skills />
      <Quote />
      <Pricing />
      <Subscribe />
      <Contact />
      <Footer />
      <Routes></Routes>
    </div>
  );
}

export default App;
