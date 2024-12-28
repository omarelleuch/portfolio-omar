import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Rust", "Java", "C++", "C"]
    },
    {
      title: "Frameworks",
      skills: ["Django", "Angular", "React"]
    },
    {
      title: "Embedded Systems",
      skills: ["STM32", "ESP8266", "Arduino", "Raspberry Pi"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Robot Framework"]
    },
    {
      title: "Communication & System Integration",
      skills: ["MODBUS", "RS232/RS485", "MQTT", "I2C", "SPI", "Linux/RTOS"]
    },
    
    {
      title: "Data-Driven Development",
      skills: ["Data Processing", "Visualization", "SQL", "Pandas"]
    }
  ];


  return (
    <div name="skills" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Skills</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-secondary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-[rgba(100,255,218,0.1)] text-secondary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;