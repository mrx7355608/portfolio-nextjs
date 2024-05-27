import { Box } from "@chakra-ui/react";
import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Projects from "@/components/ProjectSection/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Box w={"80%"} mx={"auto"}>
        <About />
        <Skills />
        <Projects/>
      </Box>
      <Footer />
    </main>
  );
}
