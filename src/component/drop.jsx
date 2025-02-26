

import { useEffect } from "react"
import "./drop.css"
import { PowerGlitch } from 'powerglitch'



const Drop =()=> {

    useEffect(()=> {

        PowerGlitch.glitch('.drop-box',{playMode:'always',
            timing: {
                duration: 2000,
                iterations: 5,
                easing: 'ease-in-out',
            },
        })
    },[])
    return (
        <>
        <div id="drop">
        <div className="drop-box">
                <h1>?</h1>
            </div>
            <div className="drop-container">
                <div className="drop-header">
                    <h1>GET YOUR FIRST DROP</h1>
                    <p>30D LEFT</p>
                </div>
                <div className="drop-tasks">
                    <div className="drop-task-container">
                    <div className="drop-check"></div>
                    <div className="drop-task">LOREM IPSUM DOLOR SIT AMET</div>
                    </div>
                    <div className="drop-task-container">
                    <div className="drop-check"></div>
                    <div className="drop-task">LOREM IPSUM DOLOR SIT AMET</div>
                    </div>
                    <div className="drop-task-container">
                    <div className="drop-check"></div>
                    <div className="drop-task">LOREM IPSUM DOLOR SIT AMET</div>
                    </div>
                    <div className="drop-task-container">
                    <div className="drop-check"></div>
                    <div className="drop-task">LOREM IPSUM DOLOR SIT AMET</div>
                    </div>
                </div>
                <div className="drop-claim">
                    <p>CLAIM</p>
                </div>
            </div>

           
        </div>
        </>
    )
}

export default Drop