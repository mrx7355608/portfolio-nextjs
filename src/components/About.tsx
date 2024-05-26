import { Text, Box, Heading, HStack } from "@chakra-ui/react";
import { Jockey_One } from "next/font/google";

const jockeyOne = Jockey_One({ weight: ["400"], subsets: ["latin"] });

export default function About() {
  return (
    <Box
      w={"65%"}
      textAlign={"center"}
      color={"white"}
      gap={8}
      my={36}
      mx={"auto"}
    >
      <Heading
        fontFamily={jockeyOne.style.fontFamily}
        as="h1"
        mb={4}
        fontSize={"5xl"}
      >
        About me
      </Heading>
      <Text fontWeight={400} color={"#a1a1a1"} lineHeight={7}>
        I am a fullstack developer with strong foundations in MERN stack
        development. I am constantly expanding my skillset by learning Nextjs to
        get familiar with this new framework and to build performant websites.
        My academic journey is ongoing at Iqra Univeristy, where I am pursuing
        my degree in Computer Science. Beyond MERN stack, I also have worked
        with other languages like Java, C++, and Python. I am also a big fan of
        linux operating systems because of the productivity boost they provide.
      </Text>
    </Box>
  );
}
