import snitchImage from "../../assets/snitch.png";
import buildResume from "../../assets/buildresume.png";
import chatgpt from "../../assets/chatgpt.png";
import { ProjectCard } from "./ProjectCard";
import movieImg from "../../assets/movie.png";
import foodImg from "../../assets/food.png";
import estate from "../../assets/estate.png";

export function Projects() {
  const cards = [
    {
      id: 1,
      title: "EatsExpress",
      thumbnail: foodImg,
      Githublink: "https://github.com/mohit15-web/Food-Delivery-Website",
      Demolink: "https://food-delivery-website-sigma-ochre.vercel.app/",
      tech: [
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/redux-original.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/firebase-icon.svg",
      ],
    },
    {
      id: 6,
      title: "Estate",
      thumbnail: estate,
      Githublink: "https://github.com/mohit15-web/mern-estate",
      Demolink: "https://mern-estate-mu.vercel.app/",
      tech: [
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/typescript-original.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nodejs-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mongodb-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/express-original-wordmark.svg",
      ],
    },
    {
      id: 2,
      title: "MoviesMod",
      thumbnail: movieImg,
      Githublink: "https://github.com/mohit15-web/MoviesMod",
      Demolink: "https://movies-mod-navy.vercel.app/",
      tech: [
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/redux-original.svg",
      ],
    },
    {
      id: 3,
      title: "Snitch Clone",
      thumbnail: snitchImage,
      Demolink: "https://snitch-vert.vercel.app/",
      Githublink: "https://github.com/mohit15-web/Snitch",
      tech: [
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/redux-original.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/firebase-icon.svg",
      ],
    },
    {
      id: 4,
      title: "InterviewReadyWithAI",
      thumbnail: buildResume,
      Githublink: "https://github.com/mohit15-web/InterviewReadywithAI",
      Demolink: "https://mohit15-web.github.io/InterviewReadywithAI/",
      tech: [
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/javascript-original.svg",
      ],
    },
    {
      id: 5,
      title: "ChatGPT Clone",
      thumbnail: chatgpt,
      Demolink: "https://chat-gpt-clone-roan.vercel.app/",
      tech: [
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/firebase-icon.svg",
      ],
    },
  ];

  const openSnitchGithub = (link) => {
    window.open(link, "_blank");
  };

  const openSnitch = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="py-10 w-full cursor-pointer z-100 bg-black">
      <h1 className="text-white text-[4rem] text-center">Projects</h1>

      <ProjectCard
        projects={cards}
        openGithub={openSnitchGithub}
        openLive={openSnitch}
      />
    </div>
  );
}
