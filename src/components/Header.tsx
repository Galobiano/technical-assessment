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
    <div className=" py-5 px-2 md:px-4 lg:px-6 mx-10 rounded-full ">
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
