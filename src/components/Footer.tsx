import { Heart } from "lucide-react";
import SocialIcon from "./icons/SocialIcon";
import { personalInfo } from "../data/personalInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-6"
          >
            {personalInfo.name}
          </a>

          <nav className="flex flex-wrap justify-center space-x-6 mb-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex space-x-6 mb-8">
            {personalInfo.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={social.platform}
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>

          <div className="text-center text-gray-500 text-sm">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by {personalInfo.name}</span>
              <span className="mx-2">•</span>
              <span>Powered by React</span>
            </div>
            <p>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
