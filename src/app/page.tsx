import About from "@/components/About";
import Hero from "@/components/Hero";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Box w={"80%"} mx={"auto"}>
        <About />
      </Box>
    </main>
  );
}
