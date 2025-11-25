import GetInTouch from "./GetInTouch";
import SentAMessage from "./SentAMessage";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <main className="grid grid-cols-1 lg:grid-cols-2 px-10 py-15 max-w-7xl mx-auto gap-20">
        <GetInTouch />
        <SentAMessage />
      </main>
    </motion.div>
  );
};

export default Contact;
