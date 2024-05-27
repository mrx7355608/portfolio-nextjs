import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ProjectItem from "./ProjectItem";
import { Jockey_One } from "next/font/google";

interface Project {
  name: string;
  features: string[];
  images: string[];
  description: string;
  githubLink: string;
  hostedLink: string;
  stack: string[];
}

const jockeyOne = Jockey_One({ weight: ["400"], subsets: ["latin"] });

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Socialmedia",
      description: "A facebook clone",
      images: [
        "/project-images/linuxrice-1.png",
        "/project-images/linuxrice-2.png",
      ],
      features: [
        "Google authentication with passportjs",
        "Session based authentication with passportjs",
        "View, Add, Update, and Delete posts",
        "View, Add, Update, and Delete comments",
        "Add / Remove friends",
        "Search Users",
        "Like / Dislike posts",
      ],
      githubLink: "https://github.com/mrx7355608/socialmedia",
      hostedLink: "",
      stack: ["Expressjs", "React", "MongoDB", "Nodejs", "Tailwindcss"],
    },
    {
      name: "Intellectinn",
      description: "A medium.com clone",
      images: [
        "/project-images/linuxrice-1.png",
        "/project-images/linuxrice-2.png",
      ],
      features: [
        "Bookmark articles",
        "View, Add, Update, and Delete articles",
        "View, Add, Update, and Delete comments",
        "Follow / Unfollow authors",
        "Search Users",
        "Like / Dislike articles",
        "Google authentication with passportjs",
        "Session based authentication with passportjs",
      ],
      githubLink: "https://github.com/mrx7355608/intellectinn-sever",
      hostedLink: "",
      stack: [
        "Expressjs",
        "React",
        "MongoDB",
        "Nodejs",
        "Typescript",
        "Chakra-UI",
      ],
    },
    {
      name: "Blog",
      description: "A personal blog for uploading my learnings",
      images: [
        "/project-images/linuxrice-1.png",
        "/project-images/linuxrice-2.png",
      ],
      features: [
        "Incremental Site Generation",
        "On demand revalidation",
        "Express + React admin panel for adding blogs",
      ],
      githubLink: "https://github.com/mrx7355608/blog-nextjs",
      hostedLink: "",
      stack: [
        "Expressjs",
        "React",
        "Nodejs",
        "Nextjs",
        "JavaScript",
        "Typescript",
        "MongoDB",
      ],
    },
    {
      name: "Chat Application",
      description: "An OOP based chat application made for university project",
      images: [
        "/project-images/linuxrice-1.png",
        "/project-images/linuxrice-2.png",
      ],
      features: [
        "Multi-Threading for handling multiple clients",
        "Used Concurrent Hash Map for thread safety",
        "Broadcast messages",
      ],
      githubLink: "https://github.com/mrx7355608/socialmedia",
      hostedLink: "",
      stack: ["Java"],
    },
    {
      name: "Linux Rice",
      description: "Setup linux completely according to my liking",
      images: [
        "/project-images/linuxrice-1.png",
        "/project-images/linuxrice-2.png",
      ],
      features: [
        "i3 window manager",
        "Picom compositor",
        "Neovim",
        "Zsh",
        "Oh-my-zsh",
        "Rofi",
        "Pywall",
      ],
      githubLink: "https://github.com/mrx7355608/dotfiles",
      hostedLink: "",
      stack: ["Linux"],
    },
    {
      name: "Brick Breaker",
      description:
        "A replica of classic brick breaker game made in Java with Libgdx game engine",
      images: [
        "/project-images/linuxrice-1.png",
        "/project-images/linuxrice-2.png",
      ],
      features: [
        "10 Levels",
        "Pause / Resume game",
        "Main menu screen",
        "Select level screen",
        "Gameover screen",
        "Background Music",
        "Sound on ball collisions with base, walls, and bricks",
      ],
      githubLink: "https://github.com/mrx7355608/dotfiles",
      hostedLink: "",
      stack: ["Java"],
    },
  ];

  return (
    <VStack my={36}>
      <Heading
        mb={20}
        fontFamily={jockeyOne.style.fontFamily}
        color={"white"}
        fontSize={"5xl"}
      >
        Projects
      </Heading>
      <VStack w={"full"}>
        {projects.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </VStack>
    </VStack>
  );
}
