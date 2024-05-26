import { Box, Heading, Text } from "@chakra-ui/react";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <Box>
      <Heading size={"2xl"} mb={"1"}>
        Hello👋,
      </Heading>
      <Heading size={"2xl"} mb={"4"}>
        I am{" "}
        <Text display={"inline"} color={"purple.600"} size={"2xl"}>
          Fawad
        </Text>
      </Heading>

      <Text
        fontWeight={"300"}
        color={"#707070"}
        mb={"12"}
        fontSize={"lg"}
        pr={44}
      >
        A passionate fullstack developer specializing in the MERN stack and
        Next.js.
      </Text>
      <HeroButtons />
    </Box>
  );
}
