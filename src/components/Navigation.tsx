import { Link, useLocation } from "react-router-dom";

const nav = [
  { label: "Home", href: "/home" },
  { label: "About the School", href: "/about-the-school" },
  { label: "Apply to the School", href: "/apply-to-the-school" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
  { label: "Public Event", href: "/public-event" },
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
            className={`text-primary font-bold ${
              isActive ? "font-bold underline" : ""
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
