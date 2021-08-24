import "./App.css";
import About from "./components/About/About";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

import Nagivation from "./components/Navigation/Nagivation";

function App() {
  return (
    <div>
      <Nagivation />
      <Hero />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
