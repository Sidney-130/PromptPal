import { Leaf, Lock, Star, Target, Users, Zap } from "lucide-react";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";
// import user5 from "../assets/profile-pictures/user5.jpg";
// import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Marketplace", href: "#" },
  { label: "Plans", href: "#" },
];

// export const testimonials = [
//   {
//     user: "John Doe",
//     company: "Stellar Solutions",
//     image: user1,
//     text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
//   },
//   {
//     user: "Jane Smith",
//     company: "Blue Horizon Technologies",
//     image: user2,
//     text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
//   },
//   {
//     user: "David Johnson",
//     company: "Quantum Innovations",
//     image: user3,
//     text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
//   },
//   {
//     user: "Ronee Brown",
//     company: "Fusion Dynamics",
//     image: user4,
//     text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
//   },
//   {
//     user: "Michael Wilson",
//     company: "Visionary Creations",
//     image: user5,
//     text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
//   },
//   {
//     user: "Emily Davis",
//     company: "Synergy Systems",
//     image: user6,
//     text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
//   },
// ];

export const features = [
  {
    icon: <Target />,
    text: "Our Mission",
    description:
      "Empower creators with a decentralized platform to buy, sell and share AI prompts, on a secure decentralized platform.",
  },
  {
    icon: <Lock />,
    text: "Why Decentralized?",
    description:
      "Using blockchain, PromtPal quarantees secure, transparent transactions, giving users full control over their prompts and earnings.",
  },
  {
    icon: <Zap />,
    text: "AI-Powered Creativity",
    description:
      "PromtPal leverages AI to generate uniques prompts for art, writing and more, enabling creators to produce innovative content.",
  },
  {
    icon: <Star />,
    text: "Creator Empowerment",
    description:
      "Monetize AI prompts, earn tokens and retain ownership in a fair economy where creativity thrives.",
  },
  {
    icon: <Users />,
    text: "Community Driven",
    description:
      "Join a global creator network on Discord and forums, collaborating to refine prompts and shape AI's future.",
  },
  {
    icon: <Leaf />,
    text: "Sustainable Future",
    description:
      "Eco-friendly bockchain protocols minimize impact, delivering a scalable, green platform for AI and Web3 creativity.",
  },
];

export const checklistItems = [
  {
    title: "Featured Prompts",
    description:
      "Discover expertly curated AI prompts designed to ignite your creative projects instantly.",
  },
  {
    title: "New Arrivals",
    description:
      "Explore the latest AI prompts unloaded daily by creators worldwide for fresh inpiration.",
  },
  {
    title: "Top Creators",
    description:
      "Shop exclusive promots uploaded daily by PromtPal's most innovative and celebrated creators.",
  },
  {
    title: "Categories",
    description:
      "Browse a wide range of AI prompts tailored for art, writing or technical applications.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Browse prompts for free",
      "Five daily downloads",
      "Join community discord",
      "Basic email support",
    ],
  },
  {
    title: "Gold",
    price: "$10",
    features: [
      "Unlimited prompt downloads",
      "Sell your prompts",
      "Priority  support access",
      "Exclusive premium propmts",
    ],
  },
  {
    title: "Pro",
    price: "$200",
    features: [
      "All Gold benefits",
      "Higher royalty earnings",
      "Analytics dashboard access",
      "Early feature access",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Connect Crypto Wallet" },
  { href: "#", text: "Marketplace User Manual" },
  { href: "#", text: "API Developer Docs" },
];

export const communityLinks = [
  { href: "#", text: "Join Discord Server" },
  { href: "#", text: "Creator Spotlight Blog" },
  { href: "#", text: "Prompt Share Forums" },
  { href: "#", text: "Live Web3 Webinars" },
];
