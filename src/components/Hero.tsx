"use client";
import { Heading, HStack, VStack, Text } from "@chakra-ui/react";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <HStack
      justifyContent={"space-between"}
      w={"full"}
      color={"white"}
      height={"100vh"}
      px={"48"}
    >
      <VStack alignItems={"start"} w="50%">
        <Heading size={"2xl"}>Hello,</Heading>
        <Heading size={"2xl"} mb={"2"}>
          I am{" "}
          <Text display={"inline"} color={"purple.500"} size={"2xl"}>
            Fawad
          </Text>
        </Heading>
        <Text fontWeight={"300"} color={"#a9a7a7"} mb={"5"}>
          A passionate backend developer specializing in the MERN stack and
          Next.js.
        </Text>
        <HeroButtons />
      </VStack>
    </HStack>
  );
}
