"use client";
import { HStack } from "@chakra-ui/react";
import HeroContent from "./HeroContent";
import Image from "next/image";

export default function Hero() {
  return (
    <HStack
      alignItems={"center"}
      minH={"100vh"}
      justifyContent={"space-between"}
      color={"white"}
      bg={"url('/bg.png')"}
      bgBlendMode={"darken"}
      bgColor={"rgba(0,0,0,0.4)"}
      px={52}
    >
      <HeroContent />
      <Image
        src={"/user.jpg"}
        alt=""
        width={240}
        height={240}
        style={{ borderRadius: "8px" }}
      />
    </HStack>
  );
}
