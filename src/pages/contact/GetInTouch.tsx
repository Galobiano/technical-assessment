import { FaLocationArrow } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Information = [
  {
    icon: <FaLocationArrow />,
    text: "1156 Chapel Street, POB 208339",
  },
  {
    icon: <IoCall />,
    text: "New Haven, Connecticut, 06520-8339",
  },
];

const GetInTouch = () => {
  return (
    <section>
      <div>
        <h1 className="text-[#B77466]">Get In Touch</h1>
        <p>
          For all administrative, academic, and admissions-related inquiries,
          please contact the Yale School of Art Office. Our staff will direct
          your message to the appropriate department.
        </p>
      </div>

      <div>
        {Information.map((item, index) => (
          <div
            key={index}
            className="border-1 rounded-3xl border-solid border-primary p-4 flex items-center gap-4 max-w-sm mt-4"
          >
            <span className="text-2xl text-primary">{item.icon}</span>
            <span className="text-primary font-bold">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;
