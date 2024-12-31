import {
  backend,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  leadership,
  mongodb,
  nodejs,
  precision,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Precision Farming Specialist",
    icon: precision,
  },
  {
    title: "Leadership & Business Development",
    icon: leadership,
  },
  {
    title: "Frontend Development (React/NextJs/React Native)",
    icon: web,
  },
  {
    title: "Backend Development (ExpressJS)",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    id: 1,
    title: "NJP - Bangladesh's National Job Portal",
    des: "Built the NJP project using Next.js, React, Tailwind, GSAP, Framer Motion, Redux Toolkit, and RTK Query. Enhances job search and recruitment in Bangladesh.",
    img: "/assets/njp.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/redux.svg"],
    link: "https://jobs.gov.bd/",
  },
  {
    id: 2,
    title: "Convay - Online Collaborative Meeting Hub",
    des: "Created Convay's frontend using React, TypeScript, Tailwind, GSAP, Redux Toolkit, RTK Query, Framer Motion, and Acertinity UI. It's a super seamless platform for online meetings.",
    img: "/assets/convay.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://convay.com/",
  },
  {
    id: 3,
    title: "e-Return - Bangladesh's National Tax Return Submission",
    des: "Developed e-Return's frontend with Angular, TypeScript, Material UI Components, and jQuery. Simplifies the national tax return submission process in Bangladesh.",
    img: "/assets/e-Return.png",
    iconLists: [
      "/angular.svg",
      "/material.svg",
      "/ts.svg",
      "/stream.svg",
      "/three.svg",
    ],
    link: "https://etaxnbr.gov.bd/#/auth/sign-in",
  },
  {
    id: 4,
    title: "Xoomsports - Ultimate Football Score & League Hub",
    des: "Developed Xoomsports frontend with Next.js, React, Tailwind CSS, Material Components, Redux, Redux Toolkit, and Formik. It provides comprehensive football scores and league details.",
    img: "/assets/xoomsports.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
    link: "https://www.xoomsports.com/",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Synesis IT PLC",
    iconBg: "#383E56",
    image: "/assets/companies/synesis.png",
    date: "Nov 2023 - Now",
    pointSection: [
      {
        id: 1,
        point_name: "Convay (Online Meeting Platform)",
        points: [
          "Implemented immersive recording feature.",
          "Developed user pinning for enhanced interaction",
          "Integrated invitation links for seamless meeting access.",
        ],
      },
      {
        id: 2,
        point_name: "National Job Portal (NJP)",
        points: [
          "Designed dynamic resume creation features.",
          "Integrated an AI-driven proctorial model for secure exams.",
          "Enabled seamless job application and exam processes.",
          "Developed features for automatic shortlisting and exam control for employers.",
        ],
      },
    ],
  },
  {
    title: "React / React Native Developer",
    company_name: "Root Devs",
    iconBg: "#383E56",
    image: "/assets/companies/rootdevs.png",
    date: "May 2023 - Nov 2023",
    pointSection: [
      {
        id: 1,
        point_name: "XoomSports (Online sport Platform)",
        points: [
          "Developed the admin and frontend for XoomSport, a sports streaming platform.",
          "Showcased Full-Stack Development skills using React, Next.js, Redux Toolkit, Node, Express, Prisma, MongoDB, Tailwind CSS, Zustand, and React Query",
          "Integrated realtime score, match update, custom play urls.",
        ],
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Mighty Byte",
    iconBg: "#383E56",
    image: "/assets/companies/mighty.png",
    date: "Sept 2021 - Sept 2022",
    pointSection: [
      {
        id: 1,
        point_name: "Unleashing Innovation Across Various Endeavors",
        points: [
          "Developed mujib100.gov.bd as a Frontend Developer, collaborating with cross-functional teams.",
          "Created a range of UI components for a component library.",
          "Maintained websites for corporate clients such as Orion Home Appliances Ltd, EverCare Bangladesh, and Kaalmegh.",
        ],
      },
    ],
  },
];

const achievements = [
  {
    id: 1,
    title: "Watson Accelerator Global Winner - 2019",
    thumbnail: "/assets/achievements/watson.png",
  },
  {
    id: 2,
    title: "BYLC Venture Winner - 2020",
    thumbnail: "/assets/achievements/bylc.jpg",
  },
  {
    id: 3,
    title: "Emerging Community Leader Award, Global Winner - 2021",
    thumbnail: "/assets/achievements/aspire.jpg",
  },
  {
    id: 4,
    title: "Banglalink SDG Hackathon, 2nd Runner Up - 2022",
    thumbnail: "/assets/achievements/banglalink.jpg",
  },
  {
    id: 5,
    title: "CTO Forum Innovation Hackathon, Champion - 2022",
    thumbnail: "/assets/achievements/cto.jpg",
  },
  {
    id: 6,
    title: "Nasa Space App Challenge, 1st Runner Up - 2023",
    thumbnail: "/assets/achievements/nasa.jpg",
  },
  {
    id: 7,
    title: "ActionAid Digital Innovation Challenge, Champion - 2024",
    thumbnail: "/assets/achievements/actionaid2.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Redwan joined Rootdevs and was assigned our flagship product, Xoomsports, for development. He, along with three other team members, completed the project ahead of the deadline. Redwan took full ownership and responsibility for the project, adding numerous features beyond our initial promise. He is a wonderful person to work with and his dedication is truly commendable.",
    name: "Elias Khan",
    image: "/assets/clients/ek.png",
    title: "Founder and CEO, RootDevs",
  },
  {
    quote:
      "Redwan joined me in the middle of developing the largest national site, 'MUJIB-100'. His contributions were immediate and impactful. Redwan is a very hardworking individual, and I was extremely happy to work with him. His ability to integrate seamlessly into ongoing projects is remarkable.",
    name: "Ajaz Khan",
    image: "/assets/clients/ajaz.png",
    title: "Ex-Director, Mighty Byte",
  },
  {
    quote:
      "Redwan, being my university junior and a colleague at SynesisIT, was assigned a production-ready product called 'Convay,' one of our flagship online meeting platforms. He worked very efficiently on the development of seamless calling and recording features. His dedication and skill in ensuring the product's success were outstanding.",
    name: "Moinul Islam",
    image: "/assets/clients/moinul.png",
    title: "Head of Development, Synesis IT",
  },
  {
    quote:
      "When I assigned Redwan one of Bangladesh's biggest national sites, 'NJP - National Job Portal,' he worked tirelessly to meet the deadline, even sacrificing his weekends. It was a pleasure to work with him. His commitment to delivering high-quality work under tight deadlines is truly admirable.",
    name: "Sazidur Rahman",
    image: "/assets/clients/sazid.png",
    title: "Analyst Programmer & Team Lead, SynesisIT",
  },
];

export {
  achievements, experiences, projects, services,
  technologies, testimonials
};

