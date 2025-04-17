
import "./gallery.css";
import { IoSearch } from "react-icons/io5";
import image from "../assets/image_29.jpg";
import Portofolio from "../data/portofolio";
import Stack from "./cardStack";
import { MdOutlineArrowOutward } from "react-icons/md";
const Gallery =({activeSection})=> {

    const redirectToExternalLink = (url) => {
        window.open(url, '_blank');
      };
      
    return (
        <>
            {/* <div className="search-bar">
                <IoSearch color="#4F4F4F"/>
                <input type="text" placeholder="COLLECTION/OWNER"/>
            </div> */}
             <h3 style={{border:activeSection == "project" && '1px solid #c71b52'}} className="section-title" >Featured Project</h3>
            <div style={{border:activeSection == "project" && '1px solid #c71b52'}} id="gallery-container">
                {Portofolio.map((item,index)=>(
                
                <div onClick={()=>redirectToExternalLink(item.url)} className="gallery-card">
                    <div className="gallery-image">
                        <img src={item.img[0].img}/>
                    </div>
                    <h3 className="gallery-title">{item.title} </h3>
                    <div className="stack-wrapper">
                        {item.stacks.map((item,index)=>(
                            <p>{item}</p>
                        ))}
                    </div>
                    <p>{item.description}</p>
                </div>
                ))}
         
            </div>
        </>
    )
}

export default Gallery