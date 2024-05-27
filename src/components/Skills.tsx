import {
  Box,
  Heading,
  Text,
  Image,
  Divider,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Jockey_One } from "next/font/google";

const jockeyOne = Jockey_One({ weight: ["400"], subsets: ["latin"] });

export default function Skills() {
  const skills = {
    languages: ["Java", "Python", "Typescript", "JavaScript"],
    webskills: [
      "MongoDB",
      "Expressjs",
      "React",
      "Nodejs",
      "Nextjs",
      "Tailwindcss",
      "Chakra-UI",
      "HTML",
      "CSS",
    ],
    other: ["Linux", "Postman", "Neovim", "Vscode", "Netbeans"],
  };
  return (
    <Box textAlign={"center"} color={"white"} gap={8} my={36} mx={"auto"}>
      <Heading
        fontFamily={jockeyOne.style.fontFamily}
        as="h1"
        mb={12}
        fontSize={"5xl"}
      >
        Skills
      </Heading>
      <HStack
        justifyContent={"center"}
        alignItems={"start"}
        wrap={"wrap"}
        gap={8}
      >
        <SkillItem heading="Web skills" skillsArray={skills.webskills} />
        <SkillItem heading="Languages" skillsArray={skills.languages} />
        <SkillItem heading="Other" skillsArray={skills.other} />
      </HStack>
    </Box>
  );
}

function SkillItem({
  heading,
  skillsArray,
}: {
  heading: string;
  skillsArray: string[];
}) {
  return (
    <VStack flex={1} alignItems={"start"}>
      <Heading
        color={"gray.300"}
        fontFamily={jockeyOne.style.fontFamily}
        fontWeight={"light"}
        fontSize={"lg"}
      >
        {heading}
      </Heading>
      <Divider borderColor={"gray.300"} mb={2} />
      <VStack justifyContent={"start"} alignItems={"start"} w={"full"}>
        {skillsArray.map((skill, index) => {
          return (
            <HStack
              key={index}
              alignItems={"center"}
              py={3}
              px={5}
              w={"full"}
              bg={"#0b0c10"}
              rounded={"md"}
            >
              <Image
                src={`/icons/${skill.toLowerCase()}.png`}
                alt=""
                w={26}
                h={26}
              />
              <Text>{skill}</Text>
            </HStack>
          );
        })}
      </VStack>
    </VStack>
  );
}
