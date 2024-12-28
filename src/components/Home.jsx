import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-primary">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-secondary mb-4"
          >
            Hi, my name is
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-5xl sm:text-7xl font-bold text-textPrimary"
          >
            Omar Elleuch
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-3xl sm:text-5xl font-bold text-textSecondary mt-2"
          >
            Software & Embedded Systems Engineer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-textSecondary py-4 max-w-md"
          >
            Software and embedded systems engineer with expertise in Python, Rust, Java, and C++. Skilled in developing innovative solutions in software development and embedded systems, with a strong focus on communication protocols, full-stack development, and data-driven applications.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex gap-4"
          >
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-all duration-300"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300 ml-2">→</span>
            </Link>
            <a
              href="/omar_elleuch.pdf"
              className="group text-secondary border-2 border-secondary w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer hover:bg-secondary/10 transition-all duration-300"
            >
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex gap-6 mt-6"
          >
            <a href="https://github.com/omarelleuch" target="_blank" rel="noopener noreferrer" 
               className="text-textSecondary hover:text-secondary transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/omar-eleuch-a2bbba278/" target="_blank" rel="noopener noreferrer"
               className="text-textSecondary hover:text-secondary transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:elleuchomar316@gmail.com"
               className="text-textSecondary hover:text-secondary transition-colors duration-300">
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-8 md:mt-0 relative"
        >
        <div className="w-2/3 md:w-full max-w-lg mx-auto rounded-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="aspect-square flex items-center justify-center relative z-10 bg-primary bg-opacity-90 group-hover:bg-opacity-80 transition-all duration-300">
            <img src="/omar.png" alt="Omar" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>


        </motion.div>
      </div>
    </div>
  );
};

export default Home;