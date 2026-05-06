import TopBar from "./components/Topbar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
//css
import "./styles/styles.css";
import "./styles/TopBar.css";
import "./styles/slider.css";

function App() {
  return (
    <>
      <div className="layout">
        <TopBar />
        <Navbar />
      </div>
      <Slider/>
      {/*<Header />*
      {/*<main>}
       <Banner />}
      </main>*/}
    </>
  );
}

export default App;
