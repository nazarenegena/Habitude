import Sidebar from "@/components/sections/Sidebar";
import { ModeToggle } from "@/components/toggle-mode";

export default function DashboardLayout({ children }) {
  return (
      // ensure navigation is smooth across multiple pages
    //   dashboard has its own layout and page 
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <Sidebar />
      
      <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <ModeToggle/>
        {children}
      </main>
    </div>
  );
}
