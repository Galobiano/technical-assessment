import LogoLink from "./LogoLink";
import { Separator } from "@/components/ui/separator";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLocationArrow,
  FaSchool,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const footer = [
  "SUPPORT THE SCHOOL",
  "CONTACT US",
  "SITE MAP",
  "VISITING",
  "ACCESSIBILITY AT YALE",
];

const socialMedia = [
  {
    icon: <FaInstagram />,
  },
  {
    icon: <FaFacebook />,
  },
  {
    icon: <FaYoutube />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-linear-to-t from-[#E8D1C5] px-10 py-4 pt-13 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
      <div className="flex justify-between items-center ">
        <LogoLink className="flex " />

        <div className="flex flex-row gap-10">
          {footer.map((item, index) => (
            <div key={index} className="text-xl text-primary font-semibold">
              {item}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {socialMedia.map((item, index) => (
            <div key={index}>
              <span className="text-2xl">{item.icon}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-5 ml-20 font-semibold">
        <span className="flex items-center gap-2">
          <FaSchool /> Yale School of Art
        </span>
        <span className="flex items-center gap-2">
          <FaLocationArrow /> 1156 Chapel Street, POB 208339
        </span>
        <span className="flex items-center gap-2 ">
          <IoCall /> New Haven, Connecticut, 06520-8339
        </span>
      </div>

      <div className="px-25 pt-10">
        <Separator className="mb-2 !h-1 !rounded-full" />
        <span className="font-semibold">© 2025 Yale School of Art</span>
      </div>
    </footer>
  );
};

export default Footer;
