import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Mail, Phone, Instagram, GraduationCap, Calendar, MapPin, ExternalLink, Github, Linkedin } from "lucide-react"; 

function App() {
    const [activeSection, setActiveSection] = useState("home");
    const jobTitles = [
        "Software Engineering Internship", 1000, 
        "FullStack Developer Internship", 1000, 
        "Backend Developer Internship", 1000, 
        "Frontend Developer Internship", 1000,
    ];

    const educationData = [
    {
      institution: "Bina Nusantara University (BINUS)",
      degree: "Bachelor of Computer Science (S.Kom.)",
      period: "2023 - 2027 (Expected)", 
      details: "Studying Computer Science with a focus on web development and object-oriented programming. Currently maintaining a GPA of 3.41",
      location: "Jakarta, Indonesia",
      logo: "/LogoBinus.png" 
    },
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" }, 
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPos = window.scrollY + 200; 

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]); 

  const skillsData = [
    {
      title: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      color: "text-red-500",
    },
    {
      title: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      color: "text-cyan-400",
    },
    {
      title: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      color: "text-blue-400",
    },
    {
      title: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      color: "text-red-600",
    },
    {
      title: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      color: "text-yellow-400",
    },
    {
      title: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", 
      color: "text-green-500",
    },
    {
      title: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      color: "text-indigo-500",
    },
    {
      title: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      color: "text-orange-500",
    },
    {
      title: "C", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      color: "text-blue-700",
    },
  ];
  
  const projectsData = [
    {
      title: "B-Chat",
      desc: "A social matching and chat application for Binus students. Users can discover fellow students, match based on preferences, and connect through real-time chat built with React and Laravel.",
      liveDemo: "https://bchat.example.com", 
      github: [ 
        { label: "GitHub (FE)", url: "https://github.com/justinirawann/FrontEndBChat" },
        { label: "GitHub (BE)", url: "https://github.com/VincentGavrila07/APIBichatNew" }, // Tambahkan link Backend
      ],
    },
    {
      title: "Movie List with Ratings",
      desc: "A responsive movie listing website with ratings and reviews, built with React and integrated with The Movie Database (TMDb) API for real-time movie data.",
      liveDemo: "https://vingmovie.vercel.app/",
      github: "https://github.com/justinirawann/MovieApp", // Tetap string
    },
    {
      title: "Data Visualization Dashboard",
      desc: "Interactive dashboard built with React and D3.js to display real-time data metrics, focusing on performance and customization.",
      liveDemo: "https://dashboard.example.com",
      github: "https://github.com/justinirawan/project3", // Tetap string
    },
  ];


  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "justinirawan15@gmail.com",
      href: "mailto:justinirawan15@gmail.com",
      color: "text-red-400",
    },
    {
      icon: Phone,
      label: "Phone/WhatsApp",
      value: "+62 878-1308-3139",
      href: "https://wa.me/6287813083139",
      color: "text-green-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@justinirawan_",
      href: "https://instagram.com/justinirawan_",
      color: "text-purple-400",
    },
  ];


  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav 
        className="flex justify-between items-center px-4 md:px-10 py-6 fixed w-full top-0 z-50 transition-colors duration-300"
      >
        <h1
          className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
            activeSection === "skills" ? "text-blue-700" : "text-yellow-400"
          }`}
        >
          JustinIrawan
        </h1>

        {/* Navbar Desktop */}
        <ul className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative pb-1 transition ${
                  activeSection === item.id
                    ? "text-yellow-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-10 py-20 relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-400"
      >
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="w-full md:w-1/2 flex justify-center relative z-10 mb-8 md:mb-0">
          <img
            src="/justin1.jpg"
            alt="profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-yellow-400 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-right md:pr-10 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-wide bg-gradient-to-r from-orange-100 to-orange-300 bg-clip-text text-transparent animate-fadeInUp">
            <span className="text-gray-50" >Hi, I'm</span> Justin Irawan
          </h2>
          <p className="text-lg md:text-2xl text-blue-100 mb-6 italic animate-fadeInUp delay-200">
            A <span className="text-yellow-300">Computer Science</span>{" "}
            student, still learning and exploring the world of programming. Not
            an expert yet, but always striving to grow and become a better
            programmer every day.
          </p>

          <div className="flex justify-center md:justify-end gap-4 animate-fadeInUp delay-300">
            <a
              href="#education" 
              className="px-6 py-3 bg-yellow-400 text-white rounded-full shadow-lg hover:bg-yellow-600 transition"
            >
              My Journey ↓
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/justinirawann" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition" 
            >
              <Linkedin className="w-6 h-6 text-blue-700" /> 
            </a>
            
            {/* Github */}
            <a
              href="https://github.com/justinirawann" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <Github className="w-6 h-6 text-gray-50" />
            </a>
          </div>
        </div>
      </section>
    
      {/* === EDUCATION SECTION === */}
      <section 
        id="education" 
        className="py-20 px-4 md:px-10 bg-gradient-to-b from-gray-900 to-indigo-900 text-gray-100"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-10 text-yellow-400">
            Education 🎓
          </h3>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 md:p-8 bg-white/10 rounded-xl shadow-2xl border border-white/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
                <div className="flex items-center mb-4">
                    <img 
                        src={edu.logo} 
                        alt="Binus University Logo" 
                        className="w-8 h-8 md:w-10 md:h-10 mr-4 object-contain rounded-full border border-yellow-400/50 p-1 bg-white"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/40x40?text=BINUS"}}
                    />
                    <h4 className="text-xl md:text-3xl font-bold text-white">
                        {edu.institution}
                    </h4>
                </div>
              
              <p className="text-lg md:text-xl font-semibold mb-4 text-yellow-300">
                <GraduationCap className="inline-block w-6 h-6 mr-2 text-yellow-400" />
                {edu.degree}
              </p>
              <div className="space-y-2 mb-4 text-gray-300">
                <p className="flex items-center text-base">
                  <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
                  {edu.period}
                </p>
                <p className="flex items-center text-base">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                  {edu.location}
                </p>
            </div>
            <p className="text-base md:text-lg text-gray-200 mt-4">
                {edu.details}
            </p>
              
            {/* === IMPLEMENTASI TYPEANIMATION BARU === */}
            <p className="mt-6 p-3 bg-yellow-500/70 rounded-lg text-center text-base font-medium text-gray-700 shadow-md">
                Currently looking for a 
                <TypeAnimation
                    sequence={jobTitles}
                    wrapper="strong"
                    speed={50} // Kecepatan mengetik
                    repeat={Infinity} // Mengulang tanpa batas
                    className="text-black inline-block ml-1"
                />
                !
            </p>
            {/* ======================================= */}
            
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION - GLASSMORPHISM BOXES */}
      <section
        id="skills"
        className="py-20 px-4 md:px-10 bg-gradient-to-r from-indigo-200 via-purple-300 to-violet-500" 
      >
        <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 text-blue-700">
              Skills 🛠️
            </h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="p-3 md:p-4 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl flex flex-col items-center justify-center 
                                   transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.7)] group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                        {/* Logo Skill */}
                        <img 
                            src={skill.icon} 
                            alt={`${skill.title} icon`} 
                            className="w-12 h-12 md:w-16 md:h-16 mb-2 object-contain filter drop-shadow-lg" 
                            onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/64x64?text=?"}} 
                        />
                        
                        {/* Nama Skill */}
                        <p className="text-sm md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {skill.title}
                        </p>
                    </motion.div>
                ))}
            </div>
          </div>
      </section>

      {/* PROJECTS - DIUBAH MENJADI GRID STATIS */}
      <section
        id="projects"
        className="py-20 px-4 md:px-10 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-10 text-yellow-400">
            Projects 💻
          </h3>
        
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((item, index) => (
              <motion.div
                key={index}
                // Menggunakan class glassmorphism
                className="p-6 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl flex flex-col transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(252,211,77,0.4)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <h4 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3">{item.title}</h4>
                <p className="text-sm md:text-base text-gray-200 mb-6 flex-grow">{item.desc}</p>
                
                {/* Tombol Link */}
                <div className="flex flex-wrap space-x-2 md:space-x-4 mt-auto pt-4">
                  <a
                    href={item.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition text-xs md:text-sm mb-2"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    Live Demo
                  </a>
                  
                  {/* Logika untuk menampung 1 atau lebih link GitHub */}
                  {Array.isArray(item.github) ? (
                    item.github.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition text-xs md:text-sm mb-2"
                      >
                        <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition text-xs md:text-sm mb-2"
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section 
        id="contact" 
        className="py-20 px-4 md:px-10 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
      >
        {/* Elemen blur di background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h3 className="text-4xl font-bold text-center mb-12 text-yellow-400">
            Contact Me 📬
          </h3>
          
          <p className="text-center text-base md:text-xl text-gray-200 mb-10">
            Let's build something great together. I'm actively seeking internship opportunities; feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {contactMethods.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-64 p-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(252,211,77,0.7)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <contact.icon className={`w-8 h-8 mb-4 ${contact.color}`} />
                  <p className="text-lg font-semibold text-white mb-1"> 
                    {contact.label}
                  </p>
                  <p className="text-sm text-gray-300 break-words"> 
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2025 Justin Irawan — All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;