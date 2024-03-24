import { Email } from "@mui/icons-material";
import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

function Topbar({menuOpen,setMenuOpen}) {

  return (
    <div id="topbar" className={menuOpen?`topbar active`:`topbar` }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            megireddy.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 9959722693</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>megireddy21@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
