
import "./gallery.css";
import { IoSearch } from "react-icons/io5";
import image from "../assets/image_29.jpg";
import Portofolio from "../data/portofolio";
import Stack from "./cardStack";

import { MdArrowOutward } from "react-icons/md";
const Gallery =()=> {
    return (
        <>
            {/* <div className="search-bar">
                <IoSearch color="#4F4F4F"/>
                <input type="text" placeholder="COLLECTION/OWNER"/>
            </div> */}
            <div className="gallery-container">
                {Portofolio.map((item,index)=> {
                    return (

                <div className="gallery-card">
                   
                        <Stack
                         randomRotation={true}
                         sensitivity={180}
                         sendToBackOnClick={true}
                         cardDimensions={{ width: 300, height: 200 }}
                        cardsData={item.img}
                        />
            
                    <div className="card-description">
                        <h3 style={{display:'flex',alignItems:'center',gap:'15px'}}>{item.title} 

                            {item.url &&
                            
                            <a target='_blank' rel='noopener noreferrer' href={item.url} >
                                <MdArrowOutward style={{cursor:'pointer'}} size={15} />
                            </a>
                            }
                            
                        </h3>

                        <p>{item.description}</p>
                    </div>
                </div>
                    )
                })}
         
            </div>
        </>
    )
}

export default Gallery