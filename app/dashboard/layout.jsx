import Sidebar from "@/components/sections/Sidebar";

export default function DashboardLayout({ children }) {
  return (
      // ensure navigation is smooth across multiple pages
    //   dashboard has its own layout and page 
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </main>
    </div>
  );
}
