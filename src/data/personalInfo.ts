interface Social {
  platform: string;
  url: string;
  icon: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  roles: string[];
  description: string;
  professionalStartYear: Date;
  about: {
    intro: string;
    skills: {
      title: string;
      icon: string;
      description: string;
    }[];
  };
  location: string;
  email: string;
  avatar: string;
  hobbies: {
    category: string;
    items: string[];
  }[];
  socials: Social[];
}

export const personalInfo: PersonalInfo = {
  name: "Standley Gury",
  title: "Senior Software Engineer",
  roles: [
    "Senior Software Engineer",
    "Full Stack Developer",
    ".NET Specialist",
    "React Enthusiast",
    "Angular Advocate",
    "Aurelia Explorer",
    "Azure DevOps Practitioner",
  ],
  professionalStartYear: new Date("2020-05-01"),
  description:
    "I enjoy seeking out creative solutions to complex problems and building things that empower others to do the same.",
  about: {
    intro:
      "I'm a senior software engineer from Malaysia with nearly {{years}} years of professional experience in software development. I specialize in Full Stack development using .NET, Aurelia, React, Angular, and leveraging Azure platform services for streamlined deployment pipelines.",
    skills: [
      {
        title: "Development",
        icon: "Code",
        description:
          "Full Stack development with a focus on creating clean, maintainable, and efficient code.",
      },
      {
        title: "Architecture",
        icon: "CodeIcon",
        description:
          "Designing robust and scalable systems using clean architecture and best practices.",
      },
    ],
  },
  location: "Kuching, Sarawak, Malaysia",
  email: "standleypg@gmail.com",
  avatar: "images/me-face.png",
  hobbies: [
    {
      category: "Outdoor",
      items: ["Hiking", "Camping"],
    },
    {
      category: "Gaming",
      items: ["Dota 2", "FIFA"],
    },
    {
      category: "Music",
      items: ["Guitar", "Spotify"],
    },
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/standleypg",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/standleypg",
      icon: "Linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/standleypg",
      icon: "Twitter",
    },
  ],
};
