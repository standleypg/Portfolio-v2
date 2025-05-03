interface WorkExperience {
  project: string;
  company: string;
  clientCompany?: string;
  description: string;
  imageUrl: string;
  companyLink: string;
  clientCompanyLink?: string;
  projectLink?: string;
}

export const workExperience: WorkExperience[] = [
  {
    project: "Optimar Commander",
    company: "99x",
    clientCompany: "Optimar",
    description:
      "Optimar is a global leader in automated fish processing systems, delivering innovative solutions to customers in over 30 countries from their Norwegian headquarters and other facilities worldwide.",
    imageUrl: "images/optimar-commander.jpg",
    companyLink: "https://99x.io/malaysia",
    clientCompanyLink: "https://www.optimar.no/",
    projectLink: "https://commander.optimar.io/",
  },
  {
    project: "Helper",
    company: "Impact Business Solutions",
    description:
      "Helpers helps employers avoid hiring untrustworthy domestic helpers by providing information on blacklisted individuals, ensuring reliable and trustworthy matches for their needs.",
    imageUrl:
      "https://images.pexels.com/photos/3831612/pexels-photo-3831612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    companyLink: "https://impact-multimedia.com/ibs/",
  },
  {
    project: "Integrated Operations Center",
    company: "Impact Business Solutions",
    description:
      "IOC is a smart city system that provides services such as crime detection and prevention, disaster relief, emergency response, smart mobility and environment monitoring in Sarawak",
    imageUrl: "images/sioc.jpg",
    companyLink: "https://impact-multimedia.com/ibs/",
  },
  {
    project: "ePengisytiharan",
    company: "Impact Business Solutions",
    description:
      "The e-Pengistiharan system tracks landings and manages payments for subsidized fuel, monthly allowances, and fish-catching incentives for registered fishermen.",
    imageUrl:
      "https://images.pexels.com/photos/3302537/pexels-photo-3302537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    companyLink: "https://impact-multimedia.com/ibs/",
  },
  {
    project: "Internet in a Box",
    company: "Sarawak Information Systems",
    description:
      "The Internet in a Box project uses a Raspberry Pi to provide offline access to digital content and services, bringing educational resources to disconnected school in rural areas in Sarawak.",
    imageUrl: "images/rpi.webp",
    companyLink: "https://www.sains.com.my/",
  },
  {
    project: "Building Security Management System",
    company: "Sarawak Information Systems",
    description:
      "The Building Security Management System integrates Hikvision's and Suprema's devices and SDK to centralize control and monitoring of security in a building. It efficiently manages video surveillance, access control, and alarm systems.",
    imageUrl:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    companyLink: "https://www.sains.com.my/",
  },
];
