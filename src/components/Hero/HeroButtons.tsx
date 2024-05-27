import { HStack, Button, useClipboard, useToast } from "@chakra-ui/react";
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import Link from "next/link";

export default function HeroButtons() {
  const { onCopy } = useClipboard("mrx7355608@gmail.com");
  const toast = useToast({
    isClosable: true,
    duration: 4000,
    status: "info",
    variant: "subtle",
    position: "top",
  });

  return (
    <HStack gap={6} alignItems={"center"}>
      <Button
        bgGradient={"linear(to-l, pink.700, purple.600)"}
        color={"white"}
        rounded={"full"}
        fontSize={"sm"}
        _hover={{
          bgGradient: "linear(to-l, pink.600, purple.600)",
          boxShadow: "0 0px 15px #7C41B2",
        }}
        px={5}
      >
        <LuDownload size={16} style={{ marginRight: "6px" }} />
        Resume
      </Button>
      <Link href={"https://www.facebook.com"} target="_blank">
        <FaFacebook size={20} />
      </Link>

      <Link href={"https://www.github.com/mrx7355608"} target="_blank">
        <FaGithub size={20} />
      </Link>

      <Link href={"https://www.linkedin.com"} target="_blank">
        <FaLinkedin size={20} />
      </Link>
      <FaEnvelope
        size={20}
        onClick={copyToClipboard}
        style={{ cursor: "pointer" }}
      />
    </HStack>
  );

  function copyToClipboard() {
    onCopy();
    toast({ description: "Email copied to clipboard" });
  }
}
