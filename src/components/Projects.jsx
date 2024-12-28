import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack Coding Platform",
      description: "A LeetCode-inspired platform using Django, PostgreSQL, and Judge0 API for real-time code execution.",
      tech: ["Angular", "Django", "PostgreSQL", "Judge0 API"],
      link: "https://github.com/omarelleuch/full-stack-codding-platform"
    },
    {
      title: "Smart IoT Data Integration",
      description: "Implemented data transfer with ESP8266 and MQTT; visualized data with Streamlit.",
      tech: ["ESP8266", "MQTT", "Streamlit"],
      link: "#"
    },
    {
      title: "SMART Light",
      description: "Developed a Flutter-based app for remote light control via Wi-Fi and ESP8266.",
      tech: ["Flutter", "ESP8266", "Wi-Fi"],
      link: "#"
    }
  ];

  return (
    <div name="projects" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[rgba(100,255,218,0.1)] text-secondary px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-secondary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;