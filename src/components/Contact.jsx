import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setFeedbackMessage(''); // Clear previous feedback
    emailjs
      .sendForm('service_t8gkyke', 'template_ol8kdi9', form.current, 'CPDNcRe89y6MXn4oc')
      .then(
        (result) => {
          setFeedbackMessage('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setFeedbackMessage('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Contact</p>
          <p className="py-6 text-textSecondary">Submit the form below to get in touch with me</p>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-2 bg-transparent border-2 rounded-md text-textPrimary focus:outline-none border-textSecondary"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="my-4 p-2 bg-transparent border-2 rounded-md text-textPrimary focus:outline-none border-textSecondary"
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
            required
            className="p-2 bg-transparent border-2 rounded-md text-textPrimary focus:outline-none border-textSecondary"
          />
          <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's talk
          </button>
        </motion.form>

        {/* Feedback Message */}
        {feedbackMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-center ${
              feedbackMessage.includes('success') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {feedbackMessage}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Contact;
