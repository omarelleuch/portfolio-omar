import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="home" className="h-screen w-full bg-primary">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-textPrimary">
            Software & Embedded Systems Engineer
          </h2>
          <p className="text-textSecondary py-4 max-w-md">
            Recent graduate from ENET'Com with expertise in software development, embedded systems, 
            and full-stack applications. Passionate about creating innovative solutions using Python, 
            Rust, Java, and C++.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;