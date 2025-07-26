export const myProjects = [
  {
    id: 1,
    title: "Snapcast- Screen Recording App",
    description:
      "SnapCast is a full-stack web application that allows you to instantly record your screen, upload videos, and share them with the world, complete with auto-generated transcriptions.",
    subDescription: [
      "Built with a Next.js 15 frontend, a Xata serverless database, and Drizzle ORM, with video processing and hosting by Bunny.net.",
      " Offers in-browser screen recording, direct video uploads, auto-generated transcripts, and management of public/private videos.",
      " Users sign in via Google OAuth, can record or upload videos, and then discover content through a searchable and filterable public library.",
    ],
    href: "https://snapcast-screen-recording-sharing-a.vercel.app/sign-in",
    logo: "",
    image: "/assets/projects/snap.jpg",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/Next.js.svg",
      },
      {
        id: 2,
        name: "PostgresSQL",
        path: "/assets/logos/PostgresSQL.svg",
      },
      {
        id: 3,
        name: "React.js",
        path: "/assets/logos/react.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "StoreIt-storage management app",
    description:
      "StoreIt is a storage management and file sharing platform built with Next.js 15 and Appwrite that allows users to upload, organize, and share various file types effortlessly.",
    subDescription: [
      "The app automatically categorizes files and provides separate pages for each type/page.tsx.",
      "Secure sign-up, sign-in, and OTP email verification protect user accounts and files.",
      "View file details and perform actions like renaming, downloading, deleting, and sharing.",
    ],
    href: "https://store-it-storage-management-app.vercel.app/sign-in",
    logo: "",
    image: "/assets/projects/storeit.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/Next.js.svg",
      },
      {
        id: 2,
        name: "Typescript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/MongoDB.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "SaaS Learning Management System (LMS)",
    description:
      "This is a LMS SaaS app that allows users to create and interact with AI-powered tutors for interactive learning sessions, featuring user auth, subscriptions, and payments.",
    subDescription: [
      "It features AI voice agents that provide interactive tutoring sessions and can be customized by users.",
      "It is built with a modern tech stack, including Next.js, Supabase, and Tailwind CSS, for a fast, scalable, and responsive user experience.",
    ],
    href: "https://talkdemy.vercel.app/",
    logo: "",
    image: "/assets/projects/lms.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/Next.js.svg",
      },
      {
        id: 2,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 3,
        name: "Typescript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Movie App",
    description:
      "A responsive movie discovery app built with React, Appwrite, and Tailwind CSS that lets users browse, search, and view trending films from the TMDB API.",
    subDescription: [
      "A feature-rich Movie App where users can browse, search, and discover trending films.",
      "It is built with a modern frontend stack using React.js, Vite, and Tailwind CSS",
      "It uses Appwrite, an open-source Backend-as-a-Service, to handle data and other backend functions.",
      "All movie information, like titles and posters, is fetched from the public TMDB API.",
    ],
    href: "https://movie-app-flame-ten.vercel.app/",
    logo: "",
    image: "/assets/projects/movie.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/Next.js.svg",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Decentralized lottery system",
    description:
      "A decentralized lottery system on Ethereum using Chainlink VRF and Automation to ensure fair draws and autonomous execution.",
    subDescription: [
      "Utilizes Chainlink VRF to generate tamper-proof random winners.",
      "Employs Chainlink Automation (Keepers) to automatically trigger lottery draws without manual intervention.",
      "Participants enter the lottery by sending ETH, secured via a smart contract.",
      "All actions are executed on-chain, ensuring full transparency and decentralization.",
    ],
    href: "https://github.com/Ambar86/Decentralized-lottery-system",
    logo: "",
    image: "/assets/projects/lottery.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/ethereum.svg",
      },
      {
        id: 2,
        name: "Ethereum",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Solidity",
        path: "/assets/logos/solidity.svg",
      },
      {
        id: 4,
        name: "javascript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Ethereum based Marketplace Platform",
    description:
      "A decentralized e-commerce platform enabling users to list, buy, and transfer items securely on the Ethereum blockchain.",
    subDescription: [
      "Users can list and purchase items directly without intermediaries using smart contracts.",
      "Each item’s ownership is transparently tracked and transferred on-chain.",
      "All transactions are recorded on Ethereum, ensuring trustless and tamper-proof operations.",
      "A responsive React.js interface displays item listings and transaction statuses using live blockchain data.",
    ],
    href: "https://github.com/Ambar86/Ethereum-based-Marketplace-Platform",
    logo: "",
    image: "/assets/projects/ecom.png",
    tags: [
      {
        id: 1,
        name: "Ethereum",
        path: "/assets/logos/ethereum.svg",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Solidity",
        path: "/assets/logos/solidity.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/Node.js.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918005159599",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ambar-gupta-2ba574246/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Ambar86",
    icon: "/assets/socials/github-white-icon.svg",
  },
];

export const experiences = [
  {
    title: "Intern @Dehix",
    job: "Frontend and Blockchain Development",
    date: "May, 2025 - Sept, 2025",
    contents: [
      "Contributed to the development of a Web3 freelance platform built with React, Next.js, Tailwind CSS, Node.js (Fastify), and Polygon.",
      "Implemented full-stack features including authentication, blockchain integration, and smart contract interaction.",
      "Worked with MongoDB and Firebase for data handling and auth, and used AWS EC2 & S3 for scalable cloud deployment.",
      "Implemented full-stack features including authentication, blockchain integration, and smart contract auditing.",
      "Audited and tested smart contracts using Foundry within a WSL development environment.",
    ],
  },
  {
    title: "Coordinator",
    job: "Mozilla Coding Club",
    date: "2022-2024",
    contents: [
      "Led the club for 2 years, organizing coding workshops, hackathons, and peer learning sessions.",
      "Taught core programming concepts in C++, JavaScript, and Web Development to students.",
      "Mentored juniors through project-based learning and live coding sessions.",
      "Fostered a collaborative environment that encouraged self-learning, problem-solving, and open-source contributions",
    ],
  },
  // {
  //   title: "Freelance Developer",
  //   job: "Self-Employed",
  //   date: "2025-Present",
  //   contents: [
  //     "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
  //     "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
  //   ],
  // },
];
export const reviews = [
  {
    name: "Anurag",
    username: "@anurag",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Mayank",
    username: "@mayank",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Jeet",
    username: "@jeet",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Keshav",
    username: "@keshav",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Raikwar",
    username: "@raikwar",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Utkarsh",
    username: "@utkarsh",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Ritesh",
    username: "@ritesh",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Parv",
    username: "@parv",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
