import "../Home/Home.css";
import { Sidebar, CategoryCard } from "../../components";
import { Production, Guitar, Piano, HeroImg } from "../../asset/index";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context";

const Home = () => {
  const currentLocation = useNavigate();
  const { setClickedCategory } = useData();

  const handleExploreButton = () => {
    currentLocation("/videolist");
    setClickedCategory("All");
  };

  return (
    <div className="library-home-page">
        <Sidebar />

      <div className="main-content-page">
        <div className="hero-img">
          <img src={ HeroImg } alt="hero-img" className="img-responsive" />
          <div className="hero-img-overlay">
            <h3>One stop destination to learn <br/>everything in <span>MUSIC</span></h3>
            <button
              id="btn-shop-now"
              className="btn btn-primary-solid"
              onClick={handleExploreButton}
            >
              Explore Now
            </button>
          </div>
        </div>

        <p className="subheading-home h3">Must Watch Videos</p>
        <div className="two-box-section">
          <CategoryCard categoryName={"Music Production"} srcImg={ Production } />
          <CategoryCard categoryName={"Guitar Lessons"} srcImg={ Guitar } />
          <CategoryCard categoryName={"Piano Lessons"} srcImg={ Piano} />
        </div>
      </div>
    </div>
  );
};

export { Home };