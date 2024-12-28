import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "Industrial Computer Engineering",
      institution: "Ecole Nationale d'Electronique et des Télécommunications de Sfax (ENETCOM), Sfax, Tunisia",
      year: "2021 – 2024",
      description: "Focus: Industrial Computer Engineering, emphasizing embedded systems, communication protocols, real-time operating systems, web development, and mobile app development (Java)."
    },
    {
      degree: "Pre-Engineering Preparatory Program",
      institution: "Institut Préparatoire aux Etudes d'Ingénieur Sfax (IPEIS)",
      year: "2019 – 2021",
      description: "Intensive preparation for engineering entrance exams, emphasizing mathematics, physics, and foundational engineering principles."
    }
  ];

  return (
    <div name="education" className="w-full bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Education</p>
        </motion.div>

        <div className="mt-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg mb-8"
            >
              <h3 className="text-xl font-bold text-secondary">{edu.degree}</h3>
              <p className="text-textSecondary">{edu.institution}</p>
              <p className="text-textSecondary mt-2">{edu.year}</p>
              <p className="text-textSecondary mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
