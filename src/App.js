import Navbar from "./components/Navbar";
import AlsoViewed from "./containers/AlsoViewed";
import Footer from "./containers/Footer";
import GameInfo from "./containers/GameInfo";
import HeroContent from "./containers/HeroContent";
import PhotoGallery from "./containers/PhotoGallery";
import "./styles/styles.css";

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <HeroContent />
      <PhotoGallery />
      <GameInfo />
      <AlsoViewed />
      <Footer />
    </div>
  );
}

export default App;
