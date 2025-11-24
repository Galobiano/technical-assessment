import GetInTouch from "./GetInTouch";
import SentAMessage from "./SentAMessage";

const Contact = () => {
  return (
    <main className="grid grid-cols-2 px-10 py-15 max-w-7xl mx-auto gap-20">
      <GetInTouch />
      <SentAMessage />
    </main>
  );
};

export default Contact;
