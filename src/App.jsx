import TopBar from "./components/Topbar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import WhyChoose from "./components/WhyChoose";
import InfoCards from "./components/InfoCards";
import Valoracion from "./components/Valoracion";
//css
import "./styles/styles.css";
import "./styles/TopBar.css";
import "./styles/slider.css";
import "./styles/infoCards.css"
import "./styles/valoracion.css"

function App() {
  return (
    <>
      <div className="layout">
        <TopBar />
        <Navbar />
      </div>
      <Slider/>
      <WhyChoose/>
      <InfoCards/>
      <Valoracion/>


      {/*<main>
      </main>
      <Header />
       <Banner />*/}
    </>
  );
}

export default App;
