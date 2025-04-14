import { NavLink } from "react-router-dom";
import "./sidebar.css";

import { FaCode } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { GoBriefcase } from "react-icons/go";
import { NavHashLink,HashLink } from "react-router-hash-link";
import { GrDocumentDownload } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Sidebar = ({setActiveSection}) => {

  return (
    <div id="sidebar">
      <div className="sidebar-container">
        <h2 className="normal-logo">AKMAL <span  style={{color:"#c71b52"}}>ABID</span></h2>
        <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} smooth onClick={()=>setActiveSection('about')} to="#intro" className="nav-link"><p>?</p> <p className="nav-text">About</p></HashLink>
        <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} onClick={()=>setActiveSection('skill')}  to="#skill-main-container" className="nav-link"><FaCode /> <p className="nav-text">Skills</p></HashLink>
        <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}  onClick={()=>setActiveSection('experience')}  to="#roadmap-container" className="nav-link">< GoBriefcase/> <p className="nav-text">Experience</p></HashLink>
        <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={()=>setActiveSection('project')}  to="#gallery-container" className="nav-link"><AiOutlineProduct /> <p className="nav-text">Project</p></HashLink>
        


        <div className="sidebar-footer">
    <a href="/files/cv.pdf" download="cv.pdf"><GrDocumentDownload/></a>

        <a target='_blank' rel='noopener noreferrer' href="https://github.com/Kazukite12"><IoLogoGithub/></a>
        <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/muhammad-akmal-abid-56386723b/"><FaLinkedin/></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
