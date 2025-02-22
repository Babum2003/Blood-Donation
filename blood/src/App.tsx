import { Github, Linkedin, Code2, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Header */}
      <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-xl sm:text-2xl font-bold"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.a>
          
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <motion.ul 
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 md:left-auto backdrop-blur-md md:backdrop-blur-none bg-white/10 md:bg-transparent w-full md:w-auto gap-4 p-4 md:p-0 shadow-lg md:shadow-none`}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
              <motion.li key={item} variants={fadeIn}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block py-2 md:py-0 px-4 md:px-0 hover:bg-white/10 md:hover:bg-transparent hover:text-blue-400 transition-colors rounded-lg md:rounded-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">BABU M</span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl sm:text-3xl lg:text-5xl"
              >
                Web Developer
              </motion.span>
            </h1>
            <motion.a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 transform text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.div 
              className="flex justify-center md:justify-start gap-4 mt-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/babu-m-9b0b23246/" },
                { icon: <Github size={20} />, href: "https://github.com/Babum2003" },
                { icon: <Code2 size={20} />, href: "https://www.hackerrank.com/profile/babum2003" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
                  variants={fadeIn}
                  whileHover={{ scale: 1.2 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
              alt="Developer" 
              className="rounded-lg shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300 w-full max-w-lg mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 backdrop-blur-sm bg-white/5">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="order-2 md:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="About"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </motion.div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <motion.h3 
                className="text-xl sm:text-2xl font-bold mb-4"
                variants={fadeIn}
              >
                I'm BABU M
              </motion.h3>
              <motion.p 
                className="text-gray-300 leading-relaxed text-sm sm:text-base"
                variants={fadeIn}
              >
                As a student of computer science engineering, I am eager to apply my skills and passion for creating innovative and user-friendly websites. My educational background has provided me with a solid foundation in front-end and back-end development, as well as experience with popular programming languages such as HTML, CSS, JavaScript, Java, Python, C, C++ and React.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div className="space-y-6" variants={fadeIn}>
              {[
                { name: 'HTML5', percentage: 90 },
                { name: 'CSS3', percentage: 85 },
                { name: 'JavaScript', percentage: 60 },
                { name: 'Bootstrap', percentage: 80 }
              ].map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-4 rounded-lg"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-2 bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                alt="Skills"
                className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 backdrop-blur-sm bg-white/5 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">My Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Clinic Website', link: 'https://github.com/Babum2003/clinic-website-project', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
              { title: 'Tour Enquiry and Booking', link: 'https://roaring-cendol-75b334.netlify.app/', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80' },
              { title: 'Abnormal Driving Analysis', link: 'https://bespoke-wisp-9e9170.netlify.app/', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
              { title: 'Train Ticket Booking', link: 'https://github.com/Babum2003/TrainTicket-Booking', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2084&q=80' },
              { title: 'Intern Projects', link: 'https://github.com/Babum2003/CognoRise-Infotech-intern-projects', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
              { title: 'Blood Donation', link: 'https://github.com/Amirsufren/blood-donation', image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2016&q=80' },
            ].map((project, index) => (
              <motion.a 
                key={index}
                href={project.link}
                className="block group"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-video">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <p className="text-white text-center font-semibold text-sm sm:text-base">{project.title}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="container mx-auto max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Contact Me</h2>
          <form 
            action="mailto:babum73392@gmail.com"
            method="post"
            className="space-y-6 bg-white/5 p-6 rounded-lg backdrop-blur-sm"
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <input 
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors placeholder-gray-400 text-sm sm:text-base"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <input 
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors placeholder-gray-400 text-sm sm:text-base"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <textarea 
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors placeholder-gray-400 text-sm sm:text-base"
              ></textarea>
            </motion.div>
            <motion.button 
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-sm bg-white/5 py-8 sm:py-12">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-xl sm:text-2xl font-bold mb-6"
            variants={fadeIn}
          >
            Portfolio
          </motion.h2>
          <motion.div 
            className="flex justify-center gap-6 mb-6"
            variants={staggerContainer}
          >
            {[
              { icon: <Facebook size={20} />, href: "#" },
              { icon: <Instagram size={20} />, href: "#" },
              { icon: <Twitter size={20} />, href: "#" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-300 hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
                variants={fadeIn}
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.p 
            className="text-gray-400 text-sm"
            variants={fadeIn}
          >
            © 2024 copyright all right reserved
          </motion.p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;