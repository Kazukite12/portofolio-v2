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
        <h1>AKMAl</h1>
        <NavLink to="/" className="nav-link"><p>?</p> About</NavLink>
        <NavLink to="/gallery" className="nav-link"><RiNftFill /> Project</NavLink>
        <a href="/files/cv.pdf" download="cv.pdf"><GrDocumentDownload/> Resume</a>

        <a target='_blank' rel='noopener noreferrer' href="https://github.com/Kazukite12"><IoLogoGithub/> Github</a>
        <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/muhammad-akmal-abid-56386723b/"><FaLinkedin/> Linkedin</a>
      
      </div>
    </div>
  );
};

export default Sidebar;
