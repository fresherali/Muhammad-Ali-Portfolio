import { motion } from "framer-motion";
import { Github, ExternalLink, Server, BookOpen, SparklesIcon } from "lucide-react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.jpeg";

const projects = [
  {
    id: 1,
    title: "Haider Chemicals",
    image: project6,
    desc: "A modern, responsive e-commerce website developed for Haider Chemicals, a business specializing in toiletries, cleaning products, chemical raw materials, empty cans, and perfume essences. The platform provides an intuitive product browsing experience with category-based filtering, search functionality, and WhatsApp-based ordering, allowing customers to explore products and contact the business directly to place orders.",
    features: [
    "Modern and responsive user interface",
    "Mobile, tablet, and desktop compatibility",
    "Product catalog with multiple categories",
    "Category-based product filtering",
    "Search functionality to find products quickly",
    "Dedicated products page with product cards",
    "WhatsApp integration for direct product ordering",
    "Pre-filled WhatsApp messages with product details",
    "Dedicated order page and order navigation",
    "Responsive navigation bar with mobile-friendly layout",
    "Hero section with business branding",
    "About Us and business information sections",
    "Contact page with inquiry form",
    "WhatsApp integration for customer inquiries",
    "Google Maps integration for business location",
    "Smooth navigation between website sections",
    "Reusable React components for maintainable code"
    ],
    tech: "React.js, JavaScript, HTML5, CSS3, React Router DOM, Framer Motion, Vite, WhatsApp Integration, Google Maps , vercel",
    github: "https://github.com/fresherali/haiderchemicals",
    live: "https://haiderchemicals-theta.vercel.app/",
    backend: "",
    swagger: "",
    category: "Business & E-commerce"
  },
  {
    id: 2,
    title: "Yummy Yummy",
    image: project1,
    desc: "Yummy Yummy is full stack final year project it is a  professional food ordering platform built with React.js + Django REST Framework, Tailwind CSS, featuring JWT Authentication, JazzCash & EasyPaisa payment integration, real-time admin dashboard, and a stunning responsive UI",
    features: [
      "Order History — Track all past and active orders with status",
      "User Profile — Edit personal info, address, phone number",
      "JWT Authentication — Access + Refresh tokens with auto-refresh",
      "Email OTP — Professional HTML email for password reset via Gmail SMTP",
      "Popular Dishes — Manage featured dishes shown on homepage",
      "Password Management — Change password + forgot password with OTP via email",
      "Contact Form — Direct message to restaurant",
      "Fully Responsive — Works perfectly on mobile, tablet, and desktop",
      "Full Menu — Browse 500+ dishes with category filter, search, and sort",
      "Ultra-Fast Menu — All dishes loaded once and filtered client-side (zero re-fetches)",
      "Smart Cart — Add, update quantity, remove items with live totals",
      "Reviews & Feedback — Star ratings and written reviews",
      "Cash on Delivery — Traditional COD option",
      "💳 Dual Payment — JazzCash & EasyPaisa mobile wallet integration",
      "Menu Management — Full CRUD for menu dishes with image upload",
      "Categories — Add, edit, delete food categories",
      "Feedback — View and moderate customer reviews",
    ],
    tech: "React, Django REST Framework, Tailwind CSS, MYSOL, pyhthon, ",
    github: "https://github.com/fresherali/yummy-yummy",
    live: "https://yummy-yummy-seven.vercel.app/",
    backend: "",
    swagger: "",
    category: "Food-Ordring website"
  },
    {
    id: 3,
    title: "Meridian Academy",
    image: project2,
    desc: "A modern, responsive educational academy website designed to make academic information and learning opportunities more accessible to students and parents. The platform brings On-Campus Classes, Home Tuition, and Online Learning together in one place, allowing users to explore educational services, browse Matriculation and Intermediate courses (Grades 9–12), understand fee structures, and submit admission inquiries.",
    features: [
      "Modern and responsive educational website",
      "On-Campus Classes information and facilities",
      "One-to-one Home Tuition services",
      "Flexible Online Learning solutions",
      "Comprehensive Matriculation and Intermediate courses",
      "Science and Arts subject information",
      "F.Sc Pre-Medical and other Intermediate courses",
      "Dedicated About Us page with mission and vision",
      "Detailed educational services page",
      "Dedicated fee structure section",
      "Dedicated homepage with academy introduction",
      "Contact Us page with admission inquiry form",
      "Academic advisor contact information",
      "Responsive navigation across devices",
      "Smooth animations and page transitions",
      "Reusable React components",
      "React Router navigation between pages"
    ],

    tech: "React.js, JavaScript, Vite, Tailwind CSS, React Router, HTML5, CSS3",
    github: "https://github.com/fresherali/Meridian-Academy",
    live: "https://meridian-academy-alpha.vercel.app/",
    backend: "",
    swagger: "",
    category: "Education & E-Learning"
  },
];

const openExternal = (url) => {
  if (!url || url === "#") return;
  window.open(url, "_blank", "noopener,noreferrer");
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Production-grade full stack applications showcasing secure backend architecture,
            modern frontend design, and scalable system solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.desc}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5">▹</span>
                        <span>{f}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-gray-500 dark:text-gray-400 italic">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.split(', ').slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.split(', ').length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                        +{project.tech.split(', ').length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openExternal(project.github)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition shadow-sm"
                  >
                    <Github size={14} />
                    Code
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openExternal(project.live)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
                  >
                    <ExternalLink size={14} />
                    Live
                  </motion.button>

                  {project.backend && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openExternal(project.backend)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <Server size={14} />
                      API
                    </motion.button>
                  )}

                  {project.swagger && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openExternal(project.swagger)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                    >
                      <BookOpen size={14} />
                      Docs
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            View All Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;