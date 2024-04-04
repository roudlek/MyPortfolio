import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceHome from "@/public/projectImages/ecommerce.png";
import DreamsClub from "@/public/projectImages/DreamsClub.png";
import Perfum from "@/public/projectImages/Perfum.png";
import nike from "@/public/projectImages/nike.png";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Alx for ALX AiCE - AI Career Essentials student",
    location: "Remote",
    description:
      "• Progressed from AI basics to proficiency, upgrading my skills in Google Tools, Chat GPT, prompt engineering, and data analysis. " +
      "\n" +
      "• Enhanced proficiency in work plan management, time management, problem-solving, proactive communication, and collaboration with peers using Google Meet.",
    icon: React.createElement(LuGraduationCap),
    date: "2024/03 - 2024/04",
  },
  {
    title: "Intern Java Back-end developer @ SQLI",
    location: "Rabat",
    description:
      "• gained experience in java, spring boot, SAP hybris, Git, mysql, Postman, Selenium, jenkins" +
      "\n" +
      "• Contributed to the test of Nespresso Maroc ecommerce website" +
      "\n" +
      "• Actively contributed to team meetings to discuss best development practices" +
      "\n" +
      "• Developed my communication skills and speed of learning and more ...",

    icon: React.createElement(FaJava),
    date: "2023/03 - 2023/09",
  },
  {
    title: "Graphic designer",
    location: "Rabat",
    description:
      "• I worked as a graphic designer in a printing house where i upskilled my design level using Adobe Illustrator.",
    icon: React.createElement(CgWorkAlt),
    date: "2023/01 - 2023/03",
  },
  {
    title: "Diploma of technician specialized in computer development",
    location: "Rabat",
    description:
      "• Learned algorithms, data structures and web development languages such as: Html, Css, Javascript",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce application",
    description: "Next js Full stack Ecommerce application",
    tags: ["React", "Next.js", "Tailwind", "Resend", "Vercel"],
    imageUrl: ecommerceHome,
  },
  {
    title: "Dreams Club",
    description: "Modern weightlifting club platform",
    tags: ["Html", "Css", "Javascript"],
    imageUrl: DreamsClub,
  },
  {
    title: "Responsive Perfum Design",
    description: "Frontend Mentor - Product preview card component challenge",
    tags: ["React", "Next.js", "Tailwind", "Flexbox"],
    imageUrl: Perfum,
  },
  {
    title: "Nike product clone section",
    description:
      "Replicating Nike products with React, Next.js, Tailwind, and Grid for seamless browsing.",
    tags: ["React", "Next.js", "Tailwind", "Grid"],
    imageUrl: nike,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Framer Motion",
  "Git",
  "java",
  "Spring Boot",
  "Mysql",
  "Postman",
  "Docker",
  "Jenkins",
] as const;
