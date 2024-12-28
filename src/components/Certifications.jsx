import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      year: "2023",
      description: "Certifies foundational knowledge of networking principles, including routing, switching, and network troubleshooting.",
      logo: "Cisco",
      credentialId: "https://www.credly.com/earner/earned/badge/8b3ff2e7-6aa5-4c67-bfd6-58ad03c01097"  
    },
    {
      title: "Docker Essentials: A Developer Introduction",
      issuer: "IBM",
      year: "2024",
      description: "Covers the fundamentals of Docker, including containerization, Docker Swarm, and creating scalable applications.",
      logo: "IBM",
      credentialId: "https://www.credly.com/earner/earned/badge/9969e532-65d4-4c9a-9471-21a405fbc75a"
    },
    {
      title: "SQL and Relational Databases",
      issuer: "IBM",
      year: "2024",
      description: "Demonstrates proficiency in SQL and relational database management, essential for managing data and querying systems.",
      logo: "IBM",
      credentialId: "https://www.credential.net/abcde"  // Replace with actual credential URL
    },
    {
      title: "Data Analysis with Python",
      issuer: "Cognitive Class",
      year: "2024",
      description: "Certification focuses on data analysis using Python, covering data manipulation, visualization, and statistical techniques.",
      logo: "Cognitive Class",
      credentialId: "https://www.credly.com/earner/earned/badge/459e002f-5082-4b85-a835-bfe4199f8510"
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      year: "2024",
      description: "Provides an introduction to essential cybersecurity concepts, tools, and best practices for protecting systems.",
      logo: "Google",
      credentialId: "https://www.coursera.org/account/accomplishments/verify/J4BLT4H3DL3K"
    },
    {
      title: "Introduction to DevOps",
      issuer: "IBM",
      year: "2024",
      description: "Covers foundational DevOps practices, tools, and automation aimed at improving software development workflows.",
      logo: "IBM",
      credentialId: "https://www.coursera.org/account/accomplishments/verify/MHX7KN3XZZ6C"
    },
    {
      title: "DevOps Essentials",
      issuer: "Coursera",
      year: "2024",
      description: "Focuses on core DevOps concepts, CI/CD practices, and essential tools used in modern software development.",
      logo: "Coursera",
      credentialId: "https://www.credly.com/earner/earned/badge/24c5afda-2dc4-4e41-bfb5-624ddcea409e"  // Replace with actual credential URL
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      year: "2024",
      description: "Validates expertise in Python for data analysis, machine learning, and data visualization.",
      logo: "IBM",
      credentialId: "https://www.credly.com/earner/earned/badge/8f55b4d2-c308-4a51-9abe-7a0b4636ae8f"
    },
    {
      title: "Containers & Kubernetes Essentials",
      issuer: "IBM",
      year: "2024",
      description: "Introduces containerization and Kubernetes orchestration, essential for modern cloud-native application development.",
      logo: "IBM",
      credentialId: "https://www.credly.com/earner/earned/badge/279f8b3b-9ead-4811-92a5-514056d37389"  // Replace with actual credential URL
    },
    {
      title: "Pandas",
      issuer: "Kaggle",
      year: "2024",
      description: "Certification in using the Pandas library for data manipulation, analysis, and visualization.",
      logo: "Kaggle",
      credentialId: "https://www.kaggle.com/learn/certification/omarelleuch/pandas"
    },
    {
      title: "c Language",
      issuer: "Sololearn",
      year: "2022",
      description: "Certifies fundamental knowledge of the C programming language, focusing on syntax, data structures, and basic programming concepts.",
      logo: "Sololearn",
      credentialId: "https://www.sololearn.com/en/certificates/CC-M6REXPTB"
    }
  ];

  return (
    <div name="certifications" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Certifications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg"
            >
              <div className="flex items-center mb-2">
                <img
                  src={`https://via.placeholder.com/40?text=${cert.logo}`}
                  alt={cert.logo}
                  className="w-10 h-10 mr-3"
                />
                <h3 className="text-xl font-bold text-secondary">{cert.title}</h3>
              </div>
              <p className="text-textSecondary mb-1">{cert.issuer} | {cert.year}</p>
              <p className="text-textSecondary">{cert.description}</p>
              {cert.credentialId && (
                <a href={cert.credentialId} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
                  Show credential
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
