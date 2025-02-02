import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"

export const DATA = {
  name: "Abdikadir qulle",
  initials: "DV",
  url: "https://dillion.io",
  location: "Kismayo, Somalia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "Hello there! I'm Abdikadir Qulle, a passionate Software Developer based in Somalia. Welcome to my digital space, where creativity meets functionality, and lines of code transform into compelling solutions. I am a dedicated and passionate full stack developer committed to producing high-quality, efficient software. I am ready to leverage my vast skill set to contribute to your projects and drive success.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@abdikadirqulle.com",
    tel: "+252 61 797802",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abdikadirqulle",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.con/in/abdikadirqulle",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/abdikadirqulle",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/abdikadirqulle",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Casritek",
      href: "https://casritek.vercel.app",
      badges: [],
      location: "Full-time",
      title: "Software Developer",
      logoUrl: "/casritek-logo.jpg",
      start: "Nov 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "e-safar app",
      badges: [],
      href: "https://esafar.app",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/esafar_app.jpg",
      start: "July 2024",
      end: "Sept 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Kismayo University",
      href: "https://ku.edu.so/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/KU-logo.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "CasriTek",
      href: "",
      dates: "nov 2024 - Present",
      active: true,
      description:
        "Developed a custom LMS using React and Next.js, with real-time collaboration features and adaptive learning paths.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://casritek.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://casritek.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/casritek.png",
      video: "",
    },
    // staff manager
    {
      title: "Staff Manager",
      href: "",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Developed a custom LMS using React and Next.js, with real-time collaboration features and adaptive learning paths.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abdikadirqulle/hotel-staff-management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/staff-manager.png",
      video: "",
    },
    // esafar
    {
      title: "Online Flight Booking App",
      href: "https://esafar.vercel.app",
      dates: "July 2024 - Sept 2024",
      active: true,
      description:
        "Developing a secure and compliant flight booking platform that streamlines travel planning and booking.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Redux",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://esafar.verlcel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/esafar.png",
      video: "",
    },
    // learnZone
    {
      title: "LearZone",
      href: "https://learnzone-rho.vercel.app",
      dates: "Jan 2024 - March 2024",
      active: true,
      description: "Developing E-learning platform for publishing courses",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "AWS",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://learnzone-rho.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abdikadirqulle/Learnzone/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/learnZone.png",
      video: "",
    },
    // j-tech
    {
      title: "J-tech",
      href: "https://jubba-tech.vercel.app",
      dates: "Sept 2023 - Dec 2023",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: ["react.js", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://jubba-tech.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abdikadirqulle/J-tech",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/j-tech.png",
      video: "",
    },
    // taskflow
    {
      title: "Taskflow",
      href: "https://github.com/abdikadirqulle/Taskflow",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: ["php", "html", "css", "mysql"],
      links: [
        {
          type: "Source",
          href: "https://github.com/abdikadirqulle/Taskflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/taskflow.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
  ],
} as const
