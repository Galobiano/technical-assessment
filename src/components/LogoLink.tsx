import logo from "@/assets/LOGO.svg";

interface LogoLinkProps {
  className?: string;
}

const LogoLink = ({ className }: LogoLinkProps) => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="" className="w-16 pt-2" />
      <p className={`${className}`}>YALE SCHOOL OF ART</p>
    </div>
  );
};

export default LogoLink;
