import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/intro/Intro";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import Resume from "./components/Resume/Resume";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./Context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Resume />
      <PortfolioList />
      <Contact />

    </div>
  );
};

export default App;
