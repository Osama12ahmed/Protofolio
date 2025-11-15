// ProjectsData.js
import CinePeekImg from "../../assets/Screenshot 2025-09-10 001210.png";
import GameIfyImg from "../../assets/Screenshot 2025-09-10 001309.png";
import YummyImg from "../../assets/Facebook post - 2.png";

const project = [{
    name: "CinePeek",
    description: "A responsive website for browsing and searching movies with details such as ratings, genres, and descriptions. Built with clean UI and smooth API integration to deliver an engaging experience.",
    cat: ["React", "CSS", "Axios", "TMDB API"], 
    image: CinePeekImg,
    link: 'https://movies-project-woad-eight.vercel.app'
  },
  {
    name: "GameIfy",
    description: "A modern gaming website to explore and discover trending games, view details, and search by categories. Focused on performance and clean design to ensure a smooth user experience.",
    cat: ["React", "CSS", "Axios", "RAWG API", "React Router"],
    image: GameIfyImg,
    link: 'https://game-ify.vercel.app/'

  },
  {
    name: "Yummy Kitchen (UI/UX)",
    description: "A mobile application design concept for a restaurant, focusing on food ordering and reservation. The UI/UX design was created to ensure an intuitive flow and a visually appealing user experience.",
    cat: ["Figma", "UI/UX Design"],
    image: YummyImg,
    link: 'https://drive.google.com/drive/folders/1tL_3G4yd6EXIa-NyMxU-xi6fn979L7o_?usp=drive_link'

  },
];

export default project;