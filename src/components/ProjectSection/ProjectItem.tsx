import {
  Text,
  HStack,
  Heading,
  UnorderedList,
  ListItem,
  VStack,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { Jockey_One } from "next/font/google";
import Link from "next/link";
import { FaGit, FaGithub, FaGlobe } from "react-icons/fa";

interface IProjectItemProps {
  name: string;
  features: string[];
  images: string[];
  description: string;
  githubLink: string;
  hostedLink: string;
  stack: string[];
}

const jockeyOne = Jockey_One({ weight: ["400"], subsets: ["latin"] });

export default function ProjectItem(props: { project: IProjectItemProps }) {
  const { project } = props;
  return (
    <HStack justifyContent={"space-between"} color={"white"} w={"full"} mb={20}>
      <VStack alignItems={"start"} w={"50%"}>
        {/* Project title */}
        <Heading fontFamily={jockeyOne.style.fontFamily} color={"purple.300"}>
          {project.name}
        </Heading>

        {/* Project description */}
        <Text color={"gray.200"} pr="12">
          {project.description}
        </Text>

        {/* Features list */}
        <UnorderedList color={"#a0a0a0"} mt={1}>
          {project.features.map((feature, index) => {
            return <ListItem key={index}>{feature}</ListItem>;
          })}
        </UnorderedList>

        {/* Stack list */}
        <HStack gap={4} mt={3} wrap={"wrap"}>
          {project.stack.map((s) => {
            return (
              <HStack alignItems={"center"} gap={2}>
                <Image src={`/icons/${s.toLowerCase()}.png`} alt="" w={25} />
                <Text fontSize={"sm"} fontWeight={"medium"} color={"gray.300"}>
                  {s}
                </Text>
              </HStack>
            );
          })}
        </HStack>

        {/* Links to github and hosted site */}
        <HStack
          alignItems={"center"}
          fontFamily={jockeyOne.style.fontFamily}
          fontSize={"sm"}
          mt={4}
        >
          <Link href={project.githubLink} target="_blank">
            <Button
              px={5}
              py={1}
              rounded={"full"}
              fontWeight={300}
              size={"sm"}
              bgColor={"rgba(25,25,25, 0.9)"}
              color={"white"}
              letterSpacing={0.3}
              _hover={{
                bgColor: "rgba(35,35,35, 0.9)",
                color: "white",
              }}
            >
              <FaGithub style={{ marginRight: "5px" }} />
              Github
            </Button>
          </Link>
          <Link href={project.hostedLink} target="_blank">
            <Button
              px={5}
              py={1}
              rounded={"full"}
              fontWeight={300}
              size={"sm"}
              bgColor={"purple.700"}
              color={"white"}
              letterSpacing={0.3}
              _hover={{
                bgColor: "purple.600",
                color: "white",
              }}
            >
              <FaGlobe style={{ marginRight: "5px" }} />
              Hosted
            </Button>
          </Link>
        </HStack>
      </VStack>

      {/* Images related to project */}
      <Box pos={"relative"} w={"50%"}>
        <Image
          src={project.images[0]}
          alt=""
          w={450}
          rounded={"lg"}
          border={"2px"}
          borderColor={"purple.700"}
          position={"absolute"}
          top={"-150"}
          zIndex={3}
          left={7}
        />
        <Image
          src={project.images[1]}
          alt=""
          w={450}
          rounded={"lg"}
          border={"2px"}
          borderColor={"purple.700"}
          position={"absolute"}
          top={"-20"}
          right={0}
        />
      </Box>
    </HStack>
  );
}
