import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import hotel from "@/public/hotel.png";
import email from "@/public/Email.jpg";
import clinic from "@/public/clinic.png";
import ecommerce from "@/public/ecommerce.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Studies", hash: "#studies" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer — Neurobase",
    location: "Remote · Morocco",
    description:
      "Built a medical-SaaS platform with Symfony, React and AI tooling. Designed and integrated REST APIs, optimised backend logic and database performance, and shipped AI assistants, RAG workflows and automation that improved operational efficiency.",
    icon: React.createElement(MdWork),
    date: "Dec 2024 — Aug 2026",
  },
  {
    title: "Full-Stack Developer — Screenday",
    location: "Morocco",
    description:
      "Developed backend APIs and business features for a school-management platform, implemented mobile-integration APIs, optimised database queries and built responsive frontend interfaces.",
    icon: React.createElement(MdWork),
    date: "Oct 2024 — Dec 2024",
  },
  {
    title: "Web Developer — CHU Fes",
    location: "Fes, Morocco",
    description:
      "Built a medical appointment-management system based on doctor availability, automated scheduling and patient-data validation, and implemented notification workflows.",
    icon: React.createElement(MdWork),
    date: "March 2024",
  },
] as const;

export const studiesData = [
  {
    title: "DTS — Full-Stack Web Development",
    location: "ISTA Al Adarissa, Fes",
    description:
      "Diploma in full-stack web development at the Institut Spécialisé de Technologie Appliquée Al Adarissa, where I built my foundation across the modern web stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 — 2024",
  },
] as const;

export const certificationsData = [
  { title: "Advanced React", issuer: "Meta" },
  { title: "JavaScript Essentials 1 & 2", issuer: "Cisco Networking Academy" },
  { title: "Introduction to Cybersecurity", issuer: "IBM · Coursera" },
  { title: "Mastering Laravel Framework & PHP", issuer: "Board Infinity" },
] as const;

export const flagshipProject = {
  eyebrow: "Flagship · Production",
  title: "Neurobase — AI Medical Reporting SaaS",
  role: "Full-Stack Developer",
  period: "Dec 2024 — Aug 2026 · ~2 years",
  summary:
    "A medical SaaS where clinicians run structured patient consultations and generate clinical reports with AI assistance. I worked across the whole stack, with the AI layer as my main focus — this is where my RAG and LLM experience comes from.",
  ai: {
    label: "AI & LLM engineering",
    points: [
      "Built conversational AI assistants with persistent thread memory, so the model holds context across an entire consultation",
      "Implemented token-by-token SSE streaming so long clinical reports render live instead of blocking the UI",
      "Designed retrieval & prompt pipelines that ground generated text in the clinician's own structured answers and templates",
      "Automated anonymisation of patient identifiers before any text is sent to an LLM",
      "Orchestrated multi-step AI workflows for automated questionnaire and template generation",
    ],
  },
  platform: {
    label: "Platform & security",
    points: [
      "REST APIs with Symfony & API Platform, plus role-based access control",
      "Two-factor authentication over SMS, email and TOTP, on JWT sessions",
      "Real-time notifications pushed over server-sent events",
      "Encrypted patient PII at rest, with search handled in the ORM layer",
      "Stripe subscriptions with tiered access, and Word/PDF report export",
    ],
  },
  stack: [
    "Symfony",
    "API Platform",
    "React",
    "Redux Toolkit",
    "MySQL",
    "LLM APIs",
    "RAG",
    "SSE Streaming",
    "Docker",
    "Stripe",
    "n8n",
  ],
  metrics: [
    { num: "~2 yrs", label: "In production" },
    { num: "~30%", label: "Backend perf gain" },
    { num: "SSE", label: "Live AI streaming" },
  ],
  note: "Private commercial product — source code under NDA, so no public repo or demo.",
} as const;

export const projectsData = [
  {
    title: "Hotel & Restaurant Management",
    description:
      "Full-stack platform with multi-role authentication (User, Hotel Admin, Restaurant Admin). Built reservation and order-management features, backend APIs handling the business logic, and dynamic React interfaces.",
    tags: ["React", "Laravel", "MySQL", "REST API"],
    imageUrl: hotel,
  },
  {
    title: "Clinic Management System",
    description:
      "A system for managing medical appointments and patient records, with role-based access (Admin / Doctor), automated scheduling and validation workflows that streamline consultations.",
    tags: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    imageUrl: clinic,
  },
  {
    title: "Medical Appointment System — CHU",
    description:
      "An appointment system driven by doctor availability, with automated scheduling, patient-data validation, and notification workflows that cut manual coordination.",
    tags: ["Laravel", "MySQL", "Notifications"],
    imageUrl: email,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full e-commerce platform with an admin dashboard — cart, order tracking and product management, with dynamic UI in Livewire and full CRUD over products, users and orders.",
    tags: ["Laravel", "Livewire", "Filament", "Tailwind", "MySQL"],
    imageUrl: ecommerce,
  },
] as const;

export const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Symfony", "Laravel", "Node.js", "NestJS", "Express", "REST APIs", "SSE"],
  },
  {
    category: "AI & Automation",
    items: ["AI Assistants", "RAG Pipelines", "LLM APIs", "Prompt Engineering", "n8n"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    category: "Security & Auth",
    items: ["JWT", "2FA", "Keycloak"],
  },
  {
    category: "Tools",
    items: ["Git", "Filament", "Livewire"],
  },
] as const;
