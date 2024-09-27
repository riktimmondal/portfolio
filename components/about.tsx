"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have worked with <span className="font-medium underline"><a href="https://cybersecurity-excellence-awards.com/candidates/microsoft/" target="_blank">DSRE team</a></span> at{" "}
        <span className="font-medium">Microsoft</span> building security products honing my skills in backend as well as frontend.
        I graduated with a <span className="font-medium">Bachelor in Computer Science Engineering</span> from{" "}
        <span className="font-medium underline"><a href="http://www.jaduniv.edu.in/" target="_blank">Jadavpur University</a></span> in 2020.
        During my four-year of college I was actively participating in{" "}
        <span className="font-medium">coding competition</span> and {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        I have been contributing to <span className="font-medium underline"><a href="https://github.com/riktimmondal" target="_blank">Open Source Community</a></span> for many years now.
        I have also spent my time as an{" "}
        <span className="font-medium">undergraduate researcher</span> under{" "}
        <span className="font-medium underline"><a href="https://scholar.google.co.in/citations?user=bDj0BUEAAAAJ&hl=en" target="_blank">Prof Ram Sarkar</a></span> and {" "}
        <span className="font-medium underline"><a href="https://scholar.google.co.in/citations?user=RMJLRiIAAAAJ&hl=en" target="_blank">Prof Sudip Kumar Naskar</a></span> working on machine learning and NLP projects.
        Please feel free to checkout my research publications.
        <br></br>
        <span className="underline"><a href="https://scholar.google.com/citations?user=cIk_z4QAAAAJ&hl=en" target="_blank">Google Sites.</a></span>{" "}
        <span className="underline"><a href="https://www.researchgate.net/profile/Riktim-Mondal" target="_blank">ResearchGate</a></span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy spending my time with my family, watching movies and working out. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Golang</span>{" "}
        and{" "}
        <span className="font-medium">Distributed System.</span>      
      </p>
    </motion.section>
  );
}