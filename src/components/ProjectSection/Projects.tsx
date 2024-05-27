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
}

const jockeyOne = Jockey_One({ weight: ["400"], subsets: ["latin"] });

export default function Projects() {
  const projects: Project[] = [
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
