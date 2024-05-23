import { HStack, Button } from "@chakra-ui/react";
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <HStack gap={6} alignItems={"center"}>
      <Button
        bgGradient={"linear(to-l, pink.600, purple.600)"}
        color={"white"}
        rounded={"full"}
        fontSize={"sm"}
        _hover={{
          bgGradient: "linear(to-l, pink.600, purple.600)",
          boxShadow: "0 0px 10px #7C41B2",
        }}
      >
        Download CV
      </Button>
      <Link href={"https://www.facebook.com"}>
        <FaFacebook size={20} />
      </Link>
      <FaGithub size={20} />
      <FaLinkedin size={20} />
      <FaEnvelope size={20} />
    </HStack>
  );
}
