import { SiFirebase, SiGit, SiJavascript, SiReact, SiHtml5, SiNextDotJs, SiTypescript } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

export const Skills = [
  {
    slug: "javascript",
    Component: SiJavascript,
    title: "JavaScript",
    Description: () => <>This is my bread and butter as a frontend dev.</>,
  },
  {
    slug: "reactjs",
    Component: SiReact,
    title: "ReactJS",
    Description: () => <>For 5 years I have been a devout ReactJS programmer.</>,
  },
  {
    slug: "html",
    Component: SiHtml5,
    title: "HTML & CSS",
    Description: () => <>Frontend is not just JS and logic. Yes, I am a pixel pusher.</>,
  },
  {
    slug: "nextjs",
    Component: SiNextDotJs,
    title: "NextJS",
    Description: () => <>My newest fave! NextJS is the best for SSR for React apps, and so much more.</>,
  },
  {
    slug: "serverless",
    Component: AiOutlineCloudServer,
    title: "Serverless",
    Description: () => <>Serverless is the new black. Vercel and NextJS makes it very easy.</>,
  },
  {
    slug: "TypeScript",
    Component: SiTypescript,
    title: "TypeScript",
    Description: () => <>Why use just JavaScript when you can have types?</>,
  },
  {
    slug: "NodeJS",
    Component: FaNodeJs,
    title: "NodeJS",
    Description: () => <>JavaScript on the backend? Yes please! While I mostly do frontend, I know my way around Node.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & real-time data.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code and project management.</>,
  },
];
