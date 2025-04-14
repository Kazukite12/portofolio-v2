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
      title: "Struck Services",
      stacks: ["React"],
      url: "https://struck-services.vercel.app/",
      summary: "Digital agency website for entrepreneurship course",
      description: "Developed a responsive digital agency platform as a final project, implementing modern React.js components and deploying via Vercel for optimal performance and scalability.",
      img: [
        { id: 1, img: struck },
        { id: 2, img: struck2 },
        { id: 3, img: struck3 },
      ]
    },
    {
      title: "NtcQuizz",
      stacks: ["React", "Express", "Redis", "MySQL", "Docker"],
      url: "https://ntctraining.id/NtcQuizz/#/home",
      summary: "Corporate-branded interactive quiz platform",
      description: "Built a Kahoot-inspired quiz system with real-time polling, dynamic scoring, and adaptive questions. Implemented Redis for live updates and Docker for containerized deployment.",
      img: [
        { id: 1, img: NtcQuizz },
        { id: 2, img: ntcquizz1 },
        { id: 3, img: ntcquizz2 },
        { id: 4, img: ntcquizz3 },
        { id: 5, img: ntcquizz4 },
        { id: 6, img: ntcquizz5 },
      ]
    },
    {
      title: "Gredupedia",
      stacks: ["React","MySQL"],
      url: "https://gredupedia.com",
      summary: "Official exhibition website with interactive features",
      description: "Created an engaging exhibition platform featuring animated transitions and responsive design to showcase Gredupedia 5's educational content and event information.",
      img: [
        { id: 1, img: gredupedia },
        { id: 2, img: gredupedia2 },
        { id: 3, img: gredupedia3 },
        { id: 4, img: gredupedia4 },
      ]
    },
    {
      title: "Educhem Alchemy",
      stacks: ["Unity", "C#"],
      url: null,
      summary: "Android chemistry education game",
      description: "Developed an immersive Unity-based mobile game for chemistry education, implementing interactive 3D models and gamified learning mechanics for multimedia course.",
      img: [
        { id: 1, img: educhem1 }
      ]
    },
    {
      title: "Hitung Cepat",
      stacks: ["React"],
      url: "https://hitung-cepat.vercel.app/#/",
      summary: "Math skills gamification platform",
      description: "Designed a web-based arithmetic game with progressive difficulty levels and performance analytics to help users improve mental calculation skills through play.",
      img: [
        { id: 1, img: hitung },
        { id: 2, img: hitung2 },
      ]
    },
    {
      title: "NtcMeter",
      stacks: ["React", "Express", "MySQL"],
      url: null,
      summary: "Corporate live polling application",
      description: "Engineered a Mentimeter-like polling system with real-time results visualization, user authentication, and custom branding for internal corporate training sessions.",
      img: [
        { id: 1, img: ntcmeter },
        { id: 2, img: ntcmeter1 },
        { id: 3, img: ntcmeter3 },
      ]
    }
  ];

export default Portofolio