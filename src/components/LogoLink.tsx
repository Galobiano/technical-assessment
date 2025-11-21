import React from "react";
import logo from "@/assets/LOGO.svg";

const LogoLink = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="" className="size-17 " />
      <p className="font-bold text-xl text-primary">YALE School of Art</p>
    </div>
  );
};

export default LogoLink;
