import { ReactNode } from "react";
import Navigation from "./Navigation";
import { SidebarTrigger } from "./ui/sidebar";
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
        <LogoLink className="font-bold  md:text-sm" />
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="flex mr-5 justify-end md:hidden">
          <SidebarTrigger />
        </div>
      </HeaderWrapper>
    </div>
  );
};

export default Header;
