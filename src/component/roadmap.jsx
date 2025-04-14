

import "./roadmap.css"
import Experience from "../data/experience"
import avatar from "../assets/avatarr.png"
import Skills from "../data/skills"
import axios from "axios"
import { useState } from "react"
import Gallery from "./gallery"




const RoadMap =({activeSection})=> {

    return (
        <>
        <div style={{border:activeSection == "about" && '1px solid #c71b52'}} id="intro">
        
        <div className="intro-img">
            <img src={avatar}/>
        </div>
        <div className="intro-description">
        <h2>Hello, I’m <span style={{color:"#c71b52"}}>Akmal </span>✌️</h2>

        <p>love to digitizing learning processes with creative thinking. I am a fresh graduate with one plus year of professional experience in full-stack web development </p>
        </div>

        </div>

        
        <br></br>
   
        <h3 style={{border:activeSection == "skill" && '1px solid #c71b52'}}  className="section-title" >Technical Skills</h3>
        <div style={{border:activeSection == "skill" && '1px solid #c71b52'}}  id="skill-main-container">
        <div className="skill-container">
            {Skills.map((data,index)=> {
                return(
    
                             <div className="skill-card">
                 <h4>{data.title}</h4>
                    <div className="skill-wrapper">
                    {data.item.map((skill,index)=> {
                        return (
                            <>
                    
                            <p>{skill.name}</p>
                            </>
                        )
                    })}
                    </div>
                    </div>    
                )
            })}
        </div>
        </div>


        <br></br>
         <h3 style={{border:activeSection == "experience" && '1px solid #c71b52'}} className="section-title" >Experience</h3>
         <div style={{border:activeSection == "experience" && '1px solid #c71b52'}}  id="roadmap-container">
            {Experience.map((item,index)=> {
                return (

                <div className="roadmap-card">
                    {/* <div className="roadmap-image">

                        <img src={item.img}/>
                    </div> */}

                    <div className="roadmap-main">
                        <div className="roadmap-header">
                            <h3 >{item.title}</h3>
                            <p>{item.startDate} - {item.endDate}</p>
                        </div>
                        <div className="roadmap-position">
                            <h5>{item.position}</h5>
                        </div>
                
                        <div className="roadmap-detail">
                        
                        <p>{item.description}</p>
                        </div>

                    </div>
                </div>
                )
            })}
         </div>
         <br></br>
         <Gallery activeSection={activeSection}/>
         <br></br>
        </>
    )
}

export default RoadMap