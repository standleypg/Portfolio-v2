import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import SocialIcon from "./icons/SocialIcon";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus(error ? "error" : null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContactInfo = (
    icon: React.ReactNode,
    title: string,
    content: React.ReactNode
  ) => (
    <div className="flex items-start">
      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
          {title}
        </h4>
        {content}
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate, have a question,
            or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact information */}
          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {renderContactInfo(
                  <Mail
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />,
                  "Email",
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                )}

                {renderContactInfo(
                  <MapPin
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />,
                  "Location",
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.location}
                  </p>
                )}
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {personalInfo.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-500 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white p-3 rounded-full transition-colors duration-300"
                      aria-label={social.platform}
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send Me a Message
            </h3>

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span>Send Message</span>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
                Your message has been sent successfully! I'll get back to you
                soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg">
                There was an error sending your message. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
