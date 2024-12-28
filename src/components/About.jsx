import { motion } from 'framer-motion';
import { FaCode, FaMicrochip, FaServer, FaTools } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Software Development",
      description:
        "Skilled in designing and implementing robust, scalable applications across multiple programming languages and adhering to modern development practices.",
    },
    {
      icon: <FaMicrochip />,
      title: "Embedded Systems",
      description:
        "Specialized in developing solutions for STM32 and ESP8266 microcontrollers, focusing on optimized performance and communication protocols.",
    },
    {
      icon: <FaServer />,
      title: "Full-Stack Development",
      description:
        "Proficient in creating dynamic web applications with seamless integration between front-end and back-end frameworks.",
    },
    {
      icon: <FaTools />,
      title: "Development Tools",
      description:
        "Adept at using version control systems, containerization tools, and best development practices.",
    },
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-primary text-textPrimary py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">About Me</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mt-10 text-textSecondary"
        >
          I hold a degree in Industrial Computer Engineering from ENET'Com, with a strong focus on developing and optimizing solutions at the intersection of software 
          and embedded systems. My expertise spans across programming languages such as Python, Rust, Java, and C++, with a specialization in embedded systems, 
          full-stack development, and data-driven applications.

        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mt-5 text-textSecondary"
        >
          My work emphasizes the integration of complex systems, ensuring smooth communication protocols, system performance optimization, and the efficient use of
          resources. I thrive on solving intricate challenges, delivering scalable, reliable, and innovative solutions that enhance both system efficiency and user
          experience.

        </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300"
            >
              <div className="text-secondary text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-textSecondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
