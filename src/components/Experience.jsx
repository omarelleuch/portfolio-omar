import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Telnet INC",
      period: "Feb 2024 – May 2024",
      role: "Software Engineer",
      description: "Developed a tool for testing payment devices using Ethernet, RS232, USB. Automated test cases with Robot Framework.",
      tech: "Python, Pandas, Tkinter"
    },
    {
      company: "Centre de Recherche Numérique de Sfax",
      period: "June 2023 – Aug 2023",
      role: "Software Developer",
      description: "Built tools for processing and visualizing sensor data. Created applications integrating OpenWeather API for automatic visualizations.",
      tech: "Python, OpenWeather API, Matplotlib"
    },
    {
      company: "Lauterbach",
      period: "July 2022 – Aug 2022",
      role: "Software Engineer",
      description: "Debugged and implemented applications in Rust using Trace32. Evaluated migration feasibility from C/C++ to Rust for embedded systems.",
      tech: "Rust, Trace32"
    }
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Experience</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-all"
            >
              <h3 className="text-2xl font-bold text-secondary">{exp.company}</h3>
              <p className="text-textSecondary">{exp.period}</p>
              <p className="text-lg font-semibold mt-2">{exp.role}</p>
              <p className="text-textSecondary mt-2">{exp.description}</p>
              <p className="text-sm text-secondary mt-2">Technologies: {exp.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;