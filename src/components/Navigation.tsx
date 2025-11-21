import { Link, useLocation } from "react-router-dom";
import PillNav from "@/components/PillNav";

const nav = [
  { label: "HOME", href: "/home" },
  { label: "ABOUT THE SCHOOL", href: "/about-the-school" },
  { label: "APPLY TO THE SCHOOL", href: "/apply-to-the-school" },
  { label: "EXHIBITIONS", href: "/exhibitions" },
  { label: "PUBLICATIONS", href: "/publications" },
  { label: "NEWS", href: "/news" },
  { label: "PUBLIC EVENT", href: "/public-event" },
];

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex flex-row gap-10">
      {nav.map(({ label, href }) => {
        const isActive = currentPath === href;
        return (
          <Link
            key={label}
            to={href}
            className={`text-primary    hover:text-[#B77466] font-bold ${
              isActive ? "" : ""
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
