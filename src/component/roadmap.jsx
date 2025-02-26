

import "./roadmap.css"
import Experience from "../data/experience"
import avatar from "../assets/avatarr.png"
import Skills from "../data/skills"


const RoadMap =()=> {
    return (
        <>
        <div className="intro">
        <div className="intro-img">
            <img src={avatar}/>
        </div>
        <div className="intro-description">
        <h1>Hello, I’m Akmal ✌️</h1>

        <p>love to digitizing learning processes with creative thinking. I am a fresh graduate with one plus year of professional experience in full-stack web development </p>
        </div>

        </div>
        <br></br>
        <h1>Skills</h1>
        <br></br>
        <div className="skill-container">
            {Skills.map((data,index)=> {
                return(
                    <div className="skill-card">
                    <h3>{data.title}</h3>
                    <div className="skill-wrapper">

                    {data.item.map((skill,index)=> {
                        return (
                            <img className="skill-icon" src={skill}/>
                        )
                    })}
                    </div>
                    </div>
                )
            })}
        </div>
        <br></br>
         <h1>Experience</h1>
         <br></br>
         <div className="roadmap-container">
            {Experience.map((item,index)=> {
                return (

                <div className="roadmap-card">
                    <div className="roadmap-image">

                        <img src={item.img}/>
                    </div>
                    <div className="roadmap-main">
                        <div className="roadmap-header">
                            <h3>{item.title}</h3>
                            <p>{item.startDate} - {item.endDate}</p>

                        </div>
                        <div className="roadmap-detail">
                        
                        <p>{item.description}</p>
                        </div>

                    </div>
                </div>
                )
            })}
         </div>
        </>
    )
}

export default RoadMap