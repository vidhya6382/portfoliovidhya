// ===== EDIT YOUR DETAILS HERE. The whole portfolio reads from this file. =====

export const PROFILE = {
  name: "Vidhya G",
  role: "Website Developer",
  where: "Fresher · Surandai, Tenkasi · HTML · CSS · JavaScript · React",
  email: "vidhv501@gmail.com",
  phone: "6382183563",
  // Put your photo in the "public" folder and write its file name, for example "photo.png".
  photo: "photo.jpeg",
  // Paste your profile links. A button appears only when its link is filled in.
  github: "",
  linkedin: "",
};

// Website layouts. Each one has a live link and its GitHub source code.
export const SITES = [
  {
    name: "Tourist Web Page",
    kind: "Travel",
    host: "vidhya6382.github.io/tourist-website",
    tint: "#1F8A70",
    tagline: "Explore the world",
    text: "A travel website layout with destinations and tour highlights.",
    live: "https://vidhya6382.github.io/tourist-website/builder%20website/home.html",
    code: "https://github.com/vidhya6382/tourist-website",
  },
  {
    name: "Cafe's Vidhya",
    kind: "Cafe",
    host: "vidhya6382.github.io/my-cafe",
    tint: "#8A5A3C",
    tagline: "Fresh coffee and snacks",
    text: "My own cafe website layout showing the menu and the cafe story.",
    live: "https://vidhya6382.github.io/my-cafe/my%20own%20project/home.html",
    code: "https://github.com/vidhya6382/my-cafe",
  },
  {
    name: "Cleaning Website",
    kind: "Cleaning service",
    host: "vidhya6382.github.io/layout1",
    tint: "#2F7FD1",
    tagline: "Spotless homes",
    text: "A cleaning services website layout with service sections.",
    live: "https://vidhya6382.github.io/layout1/Layout%201/home.html",
    code: "https://github.com/vidhya6382/layout1",
  },
  {
    name: "Bridal Makeup Website",
    kind: "Bridal makeup studio",
    host: "vidhya6382.github.io/layout2",
    tint: "#C2457A",
    tagline: "Bridal makeup and hairstyling",
    text: "A bridal makeup and hairstyling website layout.",
    live: "https://vidhya6382.github.io/layout2/layout%202/home.html",
    code: "https://github.com/vidhya6382/layout2",
  },
  {
    name: "Shoe Mart Website",
    kind: "Shoe store",
    host: "vidhya6382.github.io/layout-3",
    tint: "#E0662B",
    tagline: "Step into style",
    text: "A shoe store website layout with a product collection page.",
    live: "https://vidhya6382.github.io/layout-3/collection.html",
    code: "https://github.com/vidhya6382/layout-3",
  },
  {
    name: "Pharmacy MediCare",
    kind: "Pharmacy",
    host: "vidhya6382.github.io/layout4",
    tint: "#1E9E8F",
    tagline: "Your health, delivered",
    text: "A pharmacy website layout with a cart page.",
    live: "https://vidhya6382.github.io/layout4/layout%204/cart2.html",
    code: "https://github.com/vidhya6382/layout4",
  },
  {
    name: "Fitness Website",
    kind: "Fitness",
    host: "vidhya6382.github.io/layout5",
    tint: "#D1352B",
    tagline: "Train harder",
    text: "A fitness website layout for a gym and training programs.",
    live: "https://vidhya6382.github.io/layout5/layout5/home.html",
    code: "https://github.com/vidhya6382/layout5",
  },
];

// Full stack projects. Add live and code links when you have them.
// mock can be "quiz", "pets" or "cart" (the small picture inside the card).
export const PROJECTS = [
  {
    name: "Online Interview Preparation Platform",
    kind: "Learning platform",
    url: "interview-prep.app",
    text: "A web app where candidates practise interview questions and track their progress. React on the front end, Django and MySQL behind it.",
    tags: ["React", "Django", "MySQL"],
    live: "",
    code: "",
    mock: "quiz",
  },
  
];

export const SKILLS = [
  { label: "Front end", title: "Interfaces", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { label: "Back end", title: "Server side", items: ["Python", "Django"] },
  { label: "Data", title: "Storage", items: ["MySQL"] },
  { label: "Publishing", title: "Going live", items: ["GitHub", "GitHub Pages"] },
];

export const TIMELINE = [
  {
    when: "2022 – 2026",
    title: "B.E. Electronics and Communication Engineering",
    text: "Sardar Raja College of Engineering, Tenkasi. CGPA 8.11.",
  },
  {
    when: "Internship",
    title: "Python Full Stack Intern",
    text: "Vetri IT Systems. Worked with React.js, Django and MySQL.",
  },
  {
    when: "Achievement",
    title: "Best Participant, Naan Mudhalvan ADAS Program",
    text: "Recognised for performance in the Advanced Driver Assistance Systems program.",
  },
  {
    when: "Hackathon",
    title: "ANCIT Hackathon",
    text: "Participated and built a working project with a team.",
  },
];
