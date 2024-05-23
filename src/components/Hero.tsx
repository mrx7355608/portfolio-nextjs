"use client";
import { HStack, VStack } from "@chakra-ui/react";
import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import Image from "next/image";

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
        <HeroContent />
        <HeroButtons />
      </VStack>
      <Image
        src={"/user.jpeg"}
        alt=""
        width={400}
        height={400}
        objectFit="cover"
        style={{ borderRadius: "999px" }}
      />
    </HStack>
  );
}
