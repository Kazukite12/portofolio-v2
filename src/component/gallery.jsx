
import "./gallery.css";
import { IoSearch } from "react-icons/io5";
import image from "../assets/image_29.jpg";
import Portofolio from "../data/portofolio";
import Stack from "./cardStack";
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
                        <h3>{item.title}</h3>

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