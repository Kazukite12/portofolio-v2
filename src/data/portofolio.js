import gredupedia from "../assets/gredupedia.png"
import gredupedia2 from "../assets/gredupedia2.png"
import gredupedia3 from "../assets/gredupedia3.png"
import gredupedia4 from "../assets/gredupedia4.png"



import NtcQuizz from "../assets/ntcQuizz.png"
import ntcquizz1 from "../assets/ntcquizz1.png"
import ntcquizz2 from "../assets/ntcquizz2.png"
import ntcquizz3 from "../assets/ntcquizz3.png"
import ntcquizz4 from "../assets/ntcquizz4.png"
import ntcquizz5 from "../assets/ntcquizz5.png"

import educhem1 from "../assets/educhem1.png"

import struck from "../assets/struck-services.png"
import struck2 from "../assets/struck2.png"
import struck3 from "../assets/struck3.png"

import hitung from "../assets/hitung.png"
import hitung2 from "../assets/hitung2.png"

import ntcmeter from "../assets/ntcmeter.png"
import ntcmeter1 from "../assets/ntcmeter1.png"
import ntcmeter3 from "../assets/ntcmeter3.png"

const Portofolio = [
    {
        title:"Struck Services",
        stacks:["React"],
        url:"https://struck-services.vercel.app/",
        description:"Developed a digital agency website as a final project for entrepreneurship course, utilizing React.js for the frontend and deploying it on Vercel",
        img:[
            {id:1,img:struck},
            {id:2,img:struck2},
            {id:3,img:struck3},
        ]
    },
    {
        title:"NtcQuizz",
        stacks:["React","Express","Redis","MySQL","Docker"],
        url:"https://ntctraining.id/NtcQuizz/#/home",
        description:"Interactive quiz platform inspired by Kahoot, tailored to meet the specific needs and branding requirements of the company. The solution featured real-time polling, dynamic scoring, and adaptive question formats",
        img:[{id:1,img:NtcQuizz},
            {id:2,img:ntcquizz1},
            {id:3,img:ntcquizz2},
            {id:4,img:ntcquizz3},
            {id:5,img:ntcquizz4},
            {id:6,img:ntcquizz5},
        ]
    },
    {
        title:"Gredupedia",
        stacks:["React"],
        url:"https://gredupedia.com",
        description:"Official website for the Gredupedia 5 Exhibition",
        img:[
            {id:1,img:gredupedia},
            {id:2,img:gredupedia2},
            {id:3,img:gredupedia3},
            {id:4,img:gredupedia4},

        ]
    },
    {
        title:"Educhem Alchemy",
        stacks:["React"],
        url:null,
        description:"Android-based game builded using unity as part of the final project for a multimedia development course.",
        img:[{id:1,img:educhem1}]
    },
    {
        title:"Hitung Cepat",
        stacks:["React"],
        url:"https://hitung-cepat.vercel.app/#/",
        description:"Web-based math games as a personal project to evaluate calculating skills through gamification. ",
        img:[{id:1,img:hitung},
            {id:2,img:hitung2},
        ]
    },
    {
        title:"NtcMeter",
        stacks:["React","Express","MySQL"],
        url:null,
        description:"web-based live polling application inspired by Mentimeter, tailored to align with the specific requirements and branding of the company.",
        img:[{id:1,img:ntcmeter},
            {id:2,img:ntcmeter1},
            {id:3,img:ntcmeter3},

        ]
    },
    // {
    //     title:"Culture Action Monitor",
    //     stacks:["React","Express","MySQL"],
    //     url:"https://cms.ntctraining.id/",
    //     description:"Web Based Monitoring System for employee training",
    //     img:[{id:1,struck}]
    // },
    
]

export default Portofolio