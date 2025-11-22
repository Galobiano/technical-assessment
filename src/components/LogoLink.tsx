import logo from "@/assets/LOGO.svg";

interface LogoLinkProps {
  className?: string;
}

const LogoLink = ({ className }: LogoLinkProps) => {
  return (
    <div className={`flex items-center `}>
      <img src={logo} alt="" className={`size-17 ${className}`} />
      <p className="font-bold text-xl text-primary">YALE School of Art</p>
    </div>
  );
};

export default LogoLink;
