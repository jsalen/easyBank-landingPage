import "./App.css";
import About from "./components/About/About";
import Articles from "./components/Articles/Articles";
import Hero from "./components/Hero/Hero";

import Nagivation from "./components/Navigation/Nagivation";

function App() {
  return (
    <div>
      <Nagivation />
      <Hero />
      <About />
      <Articles />
    </div>
  );
}

export default App;
