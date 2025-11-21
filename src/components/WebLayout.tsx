import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import IntroSection from "@/pages/IntroSection";
const WebLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className=" bg-linear-to-t to-[#E8D1C5] pb-10">
        <Header />
        <IntroSection />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default WebLayout;
