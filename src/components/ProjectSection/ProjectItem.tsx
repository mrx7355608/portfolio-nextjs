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
import { FaGit, FaGithub, FaGlobe } from "react-icons/fa";

interface IProjectItemProps {
  name: string;
  features: string[];
  images: string[];
  description: string;
  githubLink: string;
  hostedLink: string;
}

const jockeyOne = Jockey_One({ weight: ["400"], subsets: ["latin"] });

export default function ProjectItem(props: { project: IProjectItemProps }) {
  const { project } = props;
  return (
    <HStack justifyContent={"space-between"} color={"white"} w={"full"} mb={20}>
      <VStack alignItems={"start"}>
        <Heading fontFamily={jockeyOne.style.fontFamily} color={"purple.300"}>
          {project.name}
        </Heading>
        <Text color={"gray.200"}>{project.description}</Text>
        <UnorderedList color={"#a0a0a0"} mt={1}>
          {project.features.map((feature, index) => {
            return <ListItem key={index}>{feature}</ListItem>;
          })}
        </UnorderedList>
        <HStack
          alignItems={"center"}
          fontFamily={jockeyOne.style.fontFamily}
          fontSize={"sm"}
          mt={4}
        >
          <Button
            px={5}
            py={1}
            pb={1.5}
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
          <Button
            px={5}
            py={1}
            pb={1.5}
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
        </HStack>
      </VStack>
      <Box pos={"relative"} w={"50%"}>
        <Image
          src={project.images[0]}
          alt=""
          w={400}
          rounded={"lg"}
          border={"2px"}
          borderColor={"purple.900"}
          position={"absolute"}
          top={"-150"}
          zIndex={3}
          left={0}
        />
        <Image
          src={project.images[1]}
          alt=""
          w={400}
          rounded={"lg"}
          border={"2px"}
          borderColor={"purple.900"}
          position={"absolute"}
          top={"-20"}
          right={0}
        />
      </Box>
    </HStack>
  );
}
