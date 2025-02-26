import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { BiSolidWallet } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { RiNftFill } from "react-icons/ri";
import { GrDocumentDownload } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const Sidebar = () => {


  return (
    <div id="sidebar">
      <div className="sidebar-container">
        <h1 className="normal-logo">AKMAL</h1>
        <h1 className="mobile-logo">AL</h1>
        <NavLink to="/" className="nav-link"><p>?</p> <p className="nav-text">About</p></NavLink>
        <NavLink to="/gallery" className="nav-link"><RiNftFill /> <p className="nav-text">Project</p></NavLink>
        <a href="/files/cv.pdf" download="cv.pdf"><GrDocumentDownload/> <p className="nav-text">Resume</p></a>

        <a target='_blank' rel='noopener noreferrer' href="https://github.com/Kazukite12"><IoLogoGithub/> <p className="nav-text">Github</p></a>
        <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/muhammad-akmal-abid-56386723b/"><FaLinkedin/> <p className="nav-text">Linkedin</p></a>
      
      </div>
    </div>
  );
};

export default Sidebar;
