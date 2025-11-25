import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import Navigation from "./Navigation";

const SideBarNav = () => {
  return (
    <Sidebar className="md:hidden !w-32">
      <SidebarContent className="px-4">
        <Navigation />
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBarNav;
