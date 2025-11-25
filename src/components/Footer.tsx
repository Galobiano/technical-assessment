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
    <footer className="bg-linear-to-t from-[#E8D1C5] px-4 sm:px-15 py-4 pt-13 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-2 w-full">
        {/* LOGO */}
        <LogoLink className="text-2xl font-bold" />

        {/* CENTER MENU */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-center md:text-left">
          {footer.map((item, index) => (
            <div key={index} className="text-sm text-primary font-bold">
              {item}
            </div>
          ))}
        </div>

        {/* ADDRESS SECTION */}
        <div className="flex flex-col text-center md:text-left">
          <span className="flex items-center justify-center md:justify-start gap-2">
            <FaSchool /> Yale School of Art
          </span>
          <span className="flex items-center justify-center md:justify-start gap-2">
            <FaLocationArrow /> 1156 Chapel Street, POB 208339
          </span>
          <span className="flex items-center justify-center md:justify-start gap-2">
            <IoCall /> New Haven, Connecticut, 06520-8339
          </span>
        </div>
      </div>

      {/* SOCIAL MEDIA ICONS */}
      <div className="flex gap-2 justify-center md:justify-start mt-4">
        {socialMedia.map((item, index) => (
          <div key={index} className="bg-primary p-2 rounded-full">
            <span className="text-xl text-secondary">{item.icon}</span>
          </div>
        ))}
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="pt-4 text-center md:text-left">
        <Separator className="mb-2 !h-1 !rounded-full" />
        <span className="font-semibold">© 2025 Yale School of Art</span>
      </div>
    </footer>
  );
};

export default Footer;
