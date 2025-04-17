import "./navbar.css"
import { FaCode } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { GoBriefcase } from "react-icons/go";
import { HashLink } from "react-router-hash-link";
import { GrDocumentDownload } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
const Navbar =({setActiveSection})=> {
    return (
        <div id="navbar">
               <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} smooth onClick={()=>setActiveSection('about')} to="#intro" className="nav-link"><p style={{color:'white'}}>?</p></HashLink>
                     <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} onClick={()=>setActiveSection('skill')}  to="#skill-main-container" className="nav-link"><FaCode /></HashLink>
                     <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}  onClick={()=>setActiveSection('experience')}  to="#roadmap-container" className="nav-link">< GoBriefcase/> </HashLink>
                     <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={()=>setActiveSection('project')}  to="#gallery-container" className="nav-link"><AiOutlineProduct /></HashLink>
                     
        </div>
    )
}

export default Navbar