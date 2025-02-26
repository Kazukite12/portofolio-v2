import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { BiSolidWallet } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { RiNftFill } from "react-icons/ri";
import { GrDocumentDownload } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";

const Sidebar = () => {


  return (
    <div id="sidebar">
      <div className="sidebar-container">
        <h1>Akmal</h1>
        <NavLink to="/" className="nav-link">? About</NavLink>
        <NavLink to="/gallery" className="nav-link"><RiNftFill /> Project</NavLink>
        <a href="/files/cv.pdf" download="cv.pdf"><GrDocumentDownload/> Resume</a>
        <a target='_blank'
            rel='noopener noreferrer' href="https://github.com/Kazukite12"><IoLogoGithub/> Github</a>
      
      </div>
    </div>
  );
};

export default Sidebar;
