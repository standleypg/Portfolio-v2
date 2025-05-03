import { useState, useRef, useEffect } from "react";
import { ExternalLink, Building2 } from "lucide-react";
import { workExperience } from "../data/work";

const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [needsExpansion, setNeedsExpansion] = useState<boolean[]>([]);

  useEffect(() => {
    const checkTextOverflow = () => {
      const newNeedsExpansion = descriptionRefs.current.map((ref) => {
        if (!ref) return false;
        return ref.scrollHeight > ref.clientHeight;
      });
      setNeedsExpansion(newNeedsExpansion);
    };

    checkTextOverflow();
    window.addEventListener("resize", checkTextOverflow);
    return () => window.removeEventListener("resize", checkTextOverflow);
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here's a look at some of the professional projects I've worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workExperience.map((work, index) => (
            <div
              key={`${work.project}-${index}`}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.project}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {work.project}
                </h3>

                <div className="flex items-center mb-4">
                  <Building2
                    size={18}
                    className="text-blue-600 dark:text-blue-400 mr-2"
                  />
                  <a
                    href={work.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {work.company}
                  </a>
                  {work.clientCompany && (
                    <>
                      <span className="mx-2 text-gray-500 dark:text-gray-400">
                        ×
                      </span>
                      <a
                        href={work.clientCompanyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {work.clientCompany}
                      </a>
                    </>
                  )}
                </div>

                <p
                  ref={(el) => (descriptionRefs.current[index] = el)}
                  className={`text-gray-600 dark:text-gray-400 mb-4 transition-all duration-300 overflow-hidden ${
                    expandedIndex === index ? "max-h-none" : "max-h-20"
                  }`}
                >
                  {work.description}
                </p>

                <div className="flex justify-between items-center">
                  {needsExpansion[index] && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      {expandedIndex === index ? "Read Less" : "Read More"}
                    </button>
                  )}

                  {work.projectLink && (
                    <a
                      href={work.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 ml-auto"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Visit</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
