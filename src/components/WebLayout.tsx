import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./Header";
import SideBarNav from "./SideBarNav";
import Footer from "./Footer";
import IntroSection from "@/pages/IntroSection";

const WebLayout = () => {
  return (
    <SidebarProvider className="flex flex-col">
      <SideBarNav />
      <div className="relative bg-linear-to-t to-[#E8D1C5] ">
        <Header />
        <IntroSection />
      </div>
      <main className="w-full max-w-[120rem] mx-auto flex-grow overflow-auto md:overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </SidebarProvider>
  );
};

export default WebLayout;
