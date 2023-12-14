import Sidebar from "@/components/sections/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    // ensure navigation is smooth across multiple pages
    //   dashboard has its own layout and page
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Sidebar />

      <main className="flex-grow">{children}</main>
    </div>
  );
}
