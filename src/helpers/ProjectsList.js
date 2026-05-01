import project01 from "./../img/projects/01.png";
import project01big from "./../img/projects/01-big.png";

import project02 from "./../img/projects/02.png";
import project02big from "./../img/projects/02-big.png";

import project03 from "./../img/projects/03.png";
import project03big from "./../img/projects/03-big.png";

import project04 from "./../img/projects/04.png";
import project04big from "./../img/projects/04-big.png";

import project05 from "./../img/projects/05.png";
import project05big from "./../img/projects/05-big.png";

import project06 from "./../img/projects/06.png";
import project06big from "./../img/projects/06-big.png";

import project07 from "./../img/projects/07.png";
import project07big from "./../img/projects/07-big.png";

import project08 from "./../img/projects/08.png";
import project08big from "./../img/projects/08-big.png";

import project09 from "./../img/projects/09.png";
import project09big from "./../img/projects/09-big.png";

import project10 from "./../img/projects/10.png";
import project10big from "./../img/projects/10-big.png";

const projects = [
  {
    title: "Java 2D Adventure Game",
    description:
      "Top-down 2D adventure built from scratch in pure Java with custom rendering, tile maps and combat.",
    longDescription:
      "A classic top-down 2D adventure game built entirely with Java Swing and Java 2D. Features a hand-rolled rendering pipeline, tile-based maps, an entity system, basic AI, combat, inventory and save/load — all without external engines.",
    skills: "Java, Swing, Java 2D",
    img: project01,
    imgBig: project01big,
    images: [project01big],
    links: [
      { label: "GitHub", url: "https://github.com/NikitaSipeykin/First2DGame", type: "github" },
    ],
  },
  {
    title: "Java 2D Card Game",
    description:
      "BlackJack implemented with a clean game loop, animated dealing and a polished Swing UI.",
    longDescription:
      "Desktop BlackJack written in Java. Includes proper card mechanics, dealer logic, betting, hand evaluation and an animated UI rendered with Java 2D.",
    skills: "Java, Swing, Java 2D",
    img: project02,
    imgBig: project02big,
    images: [project02big],
    links: [
      { label: "GitHub", url: "https://github.com/NikitaSipeykin/BlackJackJava", type: "github" },
    ],
  },
  {
    title: "Java Spring Boot Website",
    description:
      "Full-stack web app with Spring Boot, Spring Security, Hibernate and an Angular frontend.",
    longDescription:
      "An end-to-end web application demonstrating layered architecture: Spring Boot REST backend with Spring Security and Hibernate over PostgreSQL, Thymeleaf server pages and an Angular SPA layer for interactive views.",
    skills: "Java, Spring Boot, Spring Security, Thymeleaf, Hibernate, PostgreSQL, Angular",
    img: project03,
    imgBig: project03big,
    images: [project03big],
    links: [
      { label: "GitHub", url: "https://github.com/NikitaSipeykin/GB_SpringBoot_Market", type: "github" },
    ],
  },
  {
    title: "Java Spring Boot Marketplace",
    description:
      "Marketplace prototype with auth, listings, orders and an admin dashboard.",
    longDescription:
      "Buy/sell marketplace built on Spring Boot with Spring Security for auth, Hibernate over PostgreSQL for persistence, and a server-rendered HTML/CSS UI. Includes user accounts, listings management and an admin dashboard.",
    skills: "Java, Spring Boot, Spring Security, Hibernate, PostgreSQL, HTML, CSS",
    img: project04,
    imgBig: project04big,
    images: [project04big],
    links: [
      { label: "GitHub", url: "https://github.com/NikitaSipeykin/bysell", type: "github" },
    ],
  },
  {
    title: "React Crypto Currency Tracker",
    description:
      "Real-time crypto dashboard with charts, search and a watchlist, built on React + Vite.",
    longDescription:
      "Single-page crypto tracker that consumes a public market API, renders interactive charts and supports search, sorting and a personal watchlist. Built with React, Vite and modern hooks.",
    skills: "JavaScript, HTML, CSS, React, Vite",
    img: project05,
    imgBig: project05big,
    images: [project05big],
    links: [
      { label: "GitHub", url: "https://github.com/NikitaSipeykin/react-crypto-initial", type: "github" },
    ],
  },
  {
    title: "Pac-Man Game",
    description:
      "Faithful Pac-Man clone with ghost AI, collision and score system in pure Java.",
    longDescription:
      "Recreation of the classic arcade game Pac-Man. Custom maze rendering, four ghost behaviours, pellet system and an authentic feel — written in Java with Swing and Java 2D.",
    skills: "Java, Swing, Java 2D",
    img: project06,
    imgBig: project06big,
    images: [project06big],
    links: [
      { label: "GitHub", url: "https://github.com/NikitaSipeykin/PackManJava", type: "github" },
    ],
  },
  {
    title: "RUNNER Game",
    description:
      "Browser-playable infinite runner built with TypeScript and PixiJS.",
    longDescription:
      "An infinite runner playable directly in the browser. Smooth scroll, parallax background, sprite animations and a tight game loop — all powered by PixiJS and TypeScript.",
    skills: "TypeScript, PixiJS",
    img: project07,
    imgBig: project07big,
    images: [project07big],
    links: [
      { label: "Live demo", url: "https://runner-flax.vercel.app/", type: "demo" },
    ],
  },
  {
    title: "Job Assistant",
    description:
      "Spring Boot service that helps track applications, deadlines and recruiter conversations.",
    longDescription:
      "A productivity tool for job seekers. Stores applications, statuses and timelines, exposes a Spring Boot REST API and a lightweight web UI for everyday tracking.",
    skills: "Java, Spring Boot, JavaScript, HTML, CSS",
    img: project08,
    imgBig: project08big,
    images: [project08big],
    links: [
      { label: "GitHub", url: "https://github.com/NikitaSipeykin/job-assistant", type: "github" },
    ],
  },
  {
    title: "Chess Game",
    description:
      "Classical chess with full move validation, check / checkmate detection and a clean UI.",
    longDescription:
      "A complete chess implementation in Java. Validates every legal move including castling, en passant and promotion, detects check and checkmate, and ships with a polished Swing-based interface.",
    skills: "Java, Swing, Java 2D",
    img: project09,
    imgBig: project09big,
    images: [project09big],
    links: [
      { label: "GitHub", url: "https://github.com/NikitaSipeykin/chess-game", type: "github" },
    ],
  },
  {
    title: "Telegram Bot",
    description:
      "Spring Boot Telegram bot with rich commands, persistent storage and a clean architecture.",
    longDescription:
      "A Telegram bot built with Spring Boot and the official Telegram Bot API. Features command handling, persistent state, scheduled tasks and a modular handler architecture that's easy to extend.",
    skills: "Java, Spring Boot, Telegram Bot API",
    img: project10,
    imgBig: project10big,
    images: [project10big],
    links: [
      { label: "GitHub", url: "https://github.com/NikitaSipeykin/T_Bot_Hallie", type: "github" },
    ],
  },
];

export { projects };
