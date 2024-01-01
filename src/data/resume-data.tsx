import {} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mohammad Hassan",
  initials: "Hassan",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "I am a passionate and creative full-stack software engineer based in India. I consider myself a proactive worker and learner, being able to work with a team under the terms of respect and support, and helping build diverse, inclusive, and safe and sound workplaces. I am always eager for challenges where I can gain new skills or improve the existent ones..",
  avatarUrl:
    "https://cdn.truelancer.com/user-picture/2033148-64dbf26c7ea5e.jpg",
  personalWebsiteUrl: "https://codeblooded47.me",
  contact: {
    email: "mohd.hassan.dbg@gmail.com",
    tel: "+918709759624",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/codeblooded47",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/md-hassan-b4ba151bb/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/codeblooded47",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "G L Bajaj Group of Institutions",
      degree: "Graduate",
      start: "Mar 2021",
      end: "Present (Greater Noida)",
    },
    {
      school: "Jamia Millia Islamia",
      degree: "Intermediate",
      start: "Mar 2019",
      end: "Mar 2021 (New Delhi)",
    },
    {
      school: "Jamia Millia Islamia",
      degree: "Matriculate",
      start: "Mar 2018",
      end: "Mar 2019 (New Delhi)",
    },
  ],
  work: [
    {
      company: "Dreamprovider Pvt. Ltd.",
      link: "https://dreamprovider.in/", // Blank as there is no information provided for the company link
      badges: ["Full Time"],
      title: "Chief Technology Officer",
      logo: "https://dreamprovider.in/_next/static/media/logo.5d2dded6.png", // Blank as there is no information provided for the company logo
      start: "July 2022",
      end: "Present",
      description:
        "Building and leading the technology team. Setting the company’s technical vision and strategy. Staying up to date with industry trends and innovations. Developing partnerships with technology vendors. Ensuring the security and reliability of the company’s technology systems.",
    },
    {
      company: "Cramer Müller & Partner",
      link: "https://cmundp.de/", // Blank as there is no information provided for the company link
      badges: ["Remote"],
      title: "Technical Assistant",
      logo: "", // Blank as there is no information provided for the company logo
      start: "Nov 2021",
      end: "May 2022",
      description:
        "Led a team of 3 people working on developing a platform. In charge of making decisions on architecture planning and design and features development.",
    },
    {
      company: "Truelancer",
      link: "https://www.truelancer.com/freelancer/sharimsharim", // Blank as there is no information provided for the company link
      badges: ["Remote"],
      title: "Freelancer",
      logo: "https://static.truelancer.com/truelancer-logo-dark-background_small.png", // Blank as there is no information provided for the company logo
      start: "Nov 2020",
      end: "Nov 2021",
      description:
        "Managed complex projects from start to finish. Collaborated with other programmers. Worked as a backend and frontend developer. Created mobile applications. Worked as a cloud developer.",
    },
  ],
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Rust",
    "Python",
    "Dart",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Android Studio",
    "React Native",
    "Expo",
    "C",
    "C++",
    "Java",
    "Azure",
    "Google Cloud Platform",
    "AWS",
    "VIM",
    "MongoDB",
    "MySQL",
  ],
  projects: [
    {
      title: "Project Title",
      techStack: [],
      description: "Project Description",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
