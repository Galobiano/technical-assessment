import { ReactNode } from "react";
import Navigation from "./Navigation";
import { cn } from "@/libs/utils";
import LogoLink from "./LogoLink";

interface HeaderWrapperProps {
  children: ReactNode;
  className?: string;
}

const HeaderWrapper = ({ children, className }: HeaderWrapperProps) => {
  return (
    <div className=" py-5 shadow md:px-4 ">
      <div className={cn("w-full  flex justify-between", className)}>
        {children}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <HeaderWrapper className="flex items-center">
        <LogoLink />
        <Navigation />
      </HeaderWrapper>
    </div>
  );
};

export default Header;
