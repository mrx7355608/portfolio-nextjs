import { Heading, SlideFade, Text, useDisclosure } from "@chakra-ui/react";

export default function HeroContent() {
  return (
    <>
      <Heading size={"2xl"} mb={1}>
        Hello,
      </Heading>
      <Heading size={"2xl"} mb={"2"}>
        I am{" "}
        <Text display={"inline"} color={"purple.600"} size={"2xl"}>
          Fawad
        </Text>
      </Heading>

      <Text fontWeight={"300"} color={"#a9a7a7"} mb={"7"}>
        A passionate backend developer specializing in the MERN stack and
        Next.js.
      </Text>
    </>
  );
}
