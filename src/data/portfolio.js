// ============================================================
// PORTFOLIO CONFIGURATION
// Updated with your actual resume information!
// ============================================================

export const portfolioConfig = {
  // ── Personal Info ─────────────────────────────────────────
  name: "Saurav Shah",
  title: "Software Engineer | Backend Developer",
  tagline: "B.E. Computer Science student passionate about building scalable backend systems, APIs, and cloud-native applications.",
  email: "sauravshah2077@gmail.com",
  phone: "+91 6207876123",
  location: "Bengaluru, India",

  // ── Social Links ──────────────────────────────────────────
  github: "https://github.com/saurav7809",
  linkedin: "https://linkedin.com/in/saurav-shah-1a267223",
  website: "https://sauravshah.com.np",

  // ── Resume & Profile Image ────────────────────────────────
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",

  // ── About ─────────────────────────────────────────────────
  about: {
    bio: [
      "I am a Computer Science undergraduate (Class of 2027) at BMS Institute of Technology & Management with hands-on experience developing software applications and backend systems. I specialize in using Java, Python, Spring Boot, FastAPI, REST APIs, and SQL databases.",
      "I have a strong foundation in Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, and Software Engineering. I am also experienced with Git/GitHub, Docker, Linux, and API-based application development.",
      "I have built projects involving secure code execution, real-time systems, databases, and cloud-native technologies, and I am quick to learn new tools and work collaboratively."
    ],
    whatIDo: [
      {
        title: "Backend Development",
        description: "Building scalable and secure backend systems using Spring Boot, FastAPI, and RESTful APIs.",
        icon: "Server",
      },
      {
        title: "Cloud & DevOps",
        description: "Containerizing applications with Docker and orchestrating deployments using Kubernetes and CI/CD pipelines.",
        icon: "Layers",
      },
      {
        title: "AI & Real-time Systems",
        description: "Integrating AI, machine learning, and WebSockets for real-time monitoring and situational awareness.",
        icon: "Brain",
      },
      {
        title: "Problem Solving",
        description: "Applying strong CS fundamentals, DSA, and OOP to design efficient software solutions.",
        icon: "Code2",
      },
    ],
  },

  // ── Skills ────────────────────────────────────────────────
  skills: [
    {
      category: "Programming",
      items: ["Java", "Python", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Backend & APIs",
      items: ["Spring Boot", "FastAPI", "REST APIs", "WebSockets", "JSON"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "SQL", "NoSQL"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "Kubernetes", "Linux", "CI/CD", "Postman"],
    },
    {
      category: "Core CS",
      items: ["DSA", "OOP", "Operating Systems", "Networks", "DBMS"],
    },
    {
      category: "Additional",
      items: ["Artificial Intelligence", "Machine Learning", "GIS", "Computer Vision"],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      id: 1,
      title: "CodeArena — Competitive Programming Platform",
      description:
        "A full-stack platform for hosting and judging programming contests. Features a sandboxed code-execution microservice using Python and Docker to compile and run solutions against test cases securely.",
      technologies: ["Java", "Spring Boot", "Python", "Docker", "PostgreSQL", "REST APIs"],
      github: "https://github.com/saurav7809",
      liveDemo: "",
      featured: true,
      color: "purple",
    },
    {
      id: 2,
      title: "Swarm Management Application",
      description:
        "A real-time backend for coordinating and monitoring a drone swarm using REST and WebSocket APIs. Applied GIS concepts and basic computer vision for navigation and situational awareness.",
      technologies: ["Python", "FastAPI", "WebSockets", "GIS", "Computer Vision"],
      github: "https://github.com/saurav7809",
      liveDemo: "",
      featured: true,
      color: "blue",
    },
    {
      id: 3,
      title: "Cloud-Native Microservices Platform",
      description:
        "Built and containerized microservices with Docker, orchestrating deployment with Kubernetes in a Linux environment. Configured CI/CD pipelines and applied monitoring practices.",
      technologies: ["Docker", "Kubernetes", "CI/CD", "Linux"],
      github: "https://github.com/saurav7809",
      liveDemo: "",
      featured: true,
      color: "cyan",
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "BMS Institute of Technology & Management",
      location: "Bengaluru, India",
      duration: "Expected 2027",
      cgpa: "7.67 / 10",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Artificial Intelligence",
        "Machine Learning",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
      achievements: [],
    },
    {
      degree: "+2 (High School)",
      institution: "NASA COLLAGE",
      location: "",
      duration: "",
      cgpa: "75.50%",
      coursework: [],
      achievements: [],
    },
    {
      degree: "School (10th)",
      institution: "Lord Bright Wisdom International Boarding School",
      location: "",
      duration: "",
      cgpa: "80%",
      coursework: [],
      achievements: [],
    },
  ],

  // ── Experience ────────────────────────────────────────────
  experience: [],

  // ── Certifications ────────────────────────────────────────
  certifications: [
    {
      name: "Foundations of Artificial Intelligence",
      organization: "Coursera",
      date: "",
      credentialUrl: "",
    },
  ],

  // ── Achievements ──────────────────────────────────────────
  achievements: [
    {
      title: "IEEE Automated Drone Competition Finalist",
      description: "Collaborated on a drone-based disaster management solution involving autonomous navigation, image processing, and emergency-response planning.",
      date: "2024",
      icon: "Trophy",
    },
  ],
};
