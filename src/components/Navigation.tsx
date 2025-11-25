import { Link, useLocation } from "react-router-dom";

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
    <div className="flex flex-col pt-10 md:pt-0 md:flex-row gap-8 sm:gap-6 font-medium items-center">
      {nav.map(({ label, href }) => {
        const isActive = currentPath === href;
        return (
          <Link
            key={label}
            to={href}
            className={`text-primary md:text-[0.700rem] lg:text-[0.900rem] hover:text-[#B77466] font-bold  transition-all duration-400 hover:scale-120 ${
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
