import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context/index";
import { useToast } from "../../custom-hooks/useToast";
import "../NavBar/NavBar.css";
import heroIcon from "../../asset/hero-icon.png";

const NavBar = () => {
const { isAuthorized, authDispatch } = useAuth();
const navigate = useNavigate();
const { showToast } = useToast();
const { setSearchTerm, searchTerm } = useData();

const logoutUser = () => {
showToast("Logout Successful", "success");
authDispatch({ type: "RESET_AUTH" });
localStorage.removeItem("user");
localStorage.removeItem("token");
navigate("/logout");
};
return (
<nav className="header">
  <header className="nav-bar">
    <div className="nav-section">
      <div className="section-navr">
        <Link to="/">
          <img className="hero-logo" loading="eager" src={heroIcon} alt="Logo" />
        </Link>
        <Link to="/" className="nav-hero-heading">
          Resonify
        </Link>
      </div>
      <div className="input-icon icons-left">
        <i className="material-icons">search</i>
        <Link to="/videolist">
        <input className="input" type="text" id="search-bar" name="search-bar" onChange={(event)=>
        setSearchTerm(event.target.value)}
        value={searchTerm}
        />
        </Link>
      </div>
      <div className="section-iconr">
        {isAuthorized ? (
        <Link to="/logout">
        <button className="btn btn-primary-solid" onClick={logoutUser}>
          Logout
        </button>
        </Link>
        ) : (
        <Link to="/login">
        <button className="btn btn-primary-solid">Login</button>
        </Link>
        )}
      </div>
    </div>
  </header>
</nav>
);
};

export { NavBar };