import { Box } from "@chakra-ui/react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Box w={"80%"} mx={"auto"}>
        <About />
        <Skills />
      </Box>
      <Footer />
    </main>
  );
}
