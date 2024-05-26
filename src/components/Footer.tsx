import { Divider, Box, HStack, Heading } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { Jockey_One } from "next/font/google";

const jockeyOne = Jockey_One({ weight: ["400"], subsets: ["latin"] });

export default function Footer() {
  // const { onCopy } = useClipboard("mrx7355608@gmail.com");
  // const toast = useToast({
  //   isClosable: true,
  //   duration: 4000,
  //   status: "info",
  //   variant: "subtle",
  //   position: "top",
  // });

  return (
    <Box w={"full"} p={9} bg={"#0a0a0a"}>
      <HStack alignItems={"center"} justifyContent={"space-between"} mb={3}>
        <Heading
          fontSize={"2xl"}
          color={"white"}
          fontFamily={jockeyOne.style.fontFamily}
          fontWeight={300}
        >
          Fawad Imran
        </Heading>
        <HStack alignItems={"center"} gap={4}>
          <Link href={"https://www.facebook.com"} target="_blank">
            <FaFacebook size={20} color="white" />
          </Link>

          <Link href={"https://www.github.com/mrx7355608"} target="_blank">
            <FaGithub size={20} color="white" />
          </Link>

          <Link href={"https://www.linkedin.com"} target="_blank">
            <FaLinkedin size={20} color="white" />
          </Link>
          <FaEnvelope size={20} color="white" style={{ cursor: "pointer" }} />
        </HStack>
      </HStack>
      <Divider borderColor={"gray.800"} />
    </Box>
  );

  function copyToClipboard() {
    // onCopy();
    // toast({ description: "Email copied to clipboard" });
  }
}
