import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaMicrosoft } from "react-icons/fa6";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Hyderabad, India",
    description:
      "I worked with DSRE team to build scalable solutions for protecing Microsoft products and it's customers data. Build the backend of Azts, collaborated with Red Team to build Red Engagement Assistant(Full stack) and multiple scanning tools(CredScanner, Dynamic Web Scanning etc) under ACE program.",
    icon: React.createElement(FaMicrosoft),
    date: "2020-2024",
  },
  {
    title: "Software Engineer(Intern)",
    location: "Hyderabad, India",
    description:
      "I have worked as a full stack developer to develop a POC on Synthetic Transaction Platform(SSTP), which is a high scale autonomous system based on micro-services architecture to perform secure transaction simulation to ensure control effectiveness. The project was later adopted as a product at Microsoft.",
    icon: React.createElement(FaMicrosoft),
    date: "2019 - 2019",
  },
  {
    title: "Undergraduate Researcher",
    location: "Kolkata, India",
    description:
      "I have worked as an under graduate researcher under Prof Ram Sarkar and Prof Sudip Kumar Naskar, primarily focusing on Image Analysis, Activity Recognition, Video object detection, machine learning and NLP.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
] as const;

export const skillsData = [
  ".Net",
  "c#",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "NodeJs",
  "Express",
  "Redux",
  "Git",
  "Java",
  "C++",
  "Golang",
  "Spring",
  "Spring Boot",
  "Rest API",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "EF Core",
  "Azure Data Explorer",
  "Azure Cosmos Db",
  "Redis",
  "NoSQL",
  "SQL",
  "Shell",
  "Apache Kafka",
  "Grafana",
  "Prometheus",
  "Docker",
  "Kubernetes",
  "Azure Cloud Services",
  "Azure Devops",
  "CICD",
  "AWS",
  "Python",
  "Keras",
  "Pytorch",
  "NumPy",
  "Pandas",
  "Latex"
] as const;