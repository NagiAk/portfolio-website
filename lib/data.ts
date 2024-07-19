import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import hotel from "@/public/hotel.png";
import email from "@/public/Email.jpg";
import clinic from "@/public/clinic.png";

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
    name: "Projects",
    hash: "#projects",
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
    title: "Graduated high school",
    location: "Morocco, Fes",
    description:
      "I graduated after 3 years of studying. ",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Graduated from ISTA",
    location: "Morocco, Fes",
    description:
      "I graduated after 2 years of studyign web development. I also upskilled to the full stack thanks to it .",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Hotel",
    description:
      "I worked at this project with a friend for our end year project. Users can reserve a room or a table in the hotel restaurant just via site also users that have reserved a room can order food to their room.",
    tags: ["React", "Redux", "Laravel", "MySQL", "CSS"],
    imageUrl: hotel,
  },
  {
    title: "Gestion des RDVs par email",
    description:
      "I worked on this project in my 1 month internship in CHU Fes. This project allows the doctors to check and confirm the rdvs requests and sending emails ",
    tags: ["HTML", "Laravel", "Bootstrap", "MySQL", "Gmail API"],
    imageUrl: email,
  },
  {
    title: "Clinic",
    description:
      "A web site for a clinic i created on my own that can handle all the things a clinic needs from confirming RDVS sending mails and managing doctors schedules.",
    tags: ["HTML", "Laravel", "Bootstrap", "MySQL", "Gmail API"],
    imageUrl: clinic,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "Express",
  "Git",
  "MongoDB",
  "MySQL",
  "Python",
] as const;
