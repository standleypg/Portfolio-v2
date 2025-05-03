interface Project {
  project: string;
  url: string;
  description: string;
  shortDescription: string;
  technologies: string;
  liveUrl?: string | null;
}

export const projects: Project[] = [
  {
    project: "Music and Radio Discord Bot",
    url: "https://github.com/standleypg/LocalRadioAndMusicDiscordBot",
    description:
      "A Discord bot that plays music and radio stations in voice channels. This is fun project that I use on my own Discord server. This bot mainly to play local Malaysian radio stations. It uses the FFmpeg and Native Opus library to stream audio to Discord.",
    shortDescription:
      "Discord bot that plays music and radio stations in voice channels.",
    technologies:
      ".NET Core, Discord.NET, FFmpeg, Docker, libopus.so, Linux, Raspberry Pi",
    liveUrl: null,
  },
  {
    project: "e-Commerce Website",
    url: "https://github.com/standleypg/commercejs",
    description:
      "A website that uses the Commerce.js API to create an e-Commerce website. This is a fun project that I use to learn about the Commerce.js API and Stripe payments Gateway.",
    shortDescription:
      "Website that uses the Commerce.js API to create an e-Commerce website.",
    technologies: "Angular, Commerce.js, Stripe, JavaScript",
    liveUrl: "https://commerce-demo.standleypg.com",
  },
  {
    project: "Hikvision Face Recognition",
    url: "https://github.com/standleypg/FRHik",
    description:
      "A C# service that uses the Hikvision Face Recognition API to detect faces for building access control. This project is mainly used to learn about the Hikvision Face Recognition API and integrated with native c++ SDK libraries.",
    shortDescription:
      "C# service that uses the Hikvision API and SDK to detect faces for building access control.",
    technologies:
      ".NET Core, Hikvision Face Recognition API, Hikvision SDK, C#",
    liveUrl: null,
  },
  {
    project: ".Net Clean Architecture Template",
    url: "https://github.com/standleypg/Clean-Architecture-.Net-API",
    description:
      "A .Net Core API template that uses Clean Architecture. This project is mainly used to learn about Clean Architecture and how to implement it in .Net Core.",
    shortDescription: ".Net Core API template that uses Clean Architecture.",
    technologies:
      ".NET Core, Clean Architecture, MediatR, FluentValidation, AutoMapper, Swagger, Serilog, Docker, PostgreSQL, Entity Framework Core, NUnit, Moq, Mapster, ErrorOr",
    liveUrl: null,
  },
];
