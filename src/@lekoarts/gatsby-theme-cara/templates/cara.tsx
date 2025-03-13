import * as React from "react";
import { Parallax } from "@react-spring/parallax";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

const Cara = () => (
  <Layout>
    <Parallax pages={3}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={0.7} />
      <Contact offset={2} factor={1} />
      {/* <About offset={1} factor={1.2} /> */}
    </Parallax>
  </Layout>
);

export default Cara;
