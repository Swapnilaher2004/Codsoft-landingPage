import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/Herosection";
import HowToShop from "./components/HowToShop";
import PostConnect from "./components/PostConnect";
import HeaderFooter from "./components/HeaderFooter";

function App() {
  return (
    <div className="App">
     
        <Navbar />
        <HeroSection/>
        <HowToShop/>
        <PostConnect/>
        <HeaderFooter/>

    </div>
  );
}

export default App;
