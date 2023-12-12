import RootLayout from "@/app/layout";
import DashboardLayout from "../page";

export default function Page() {
  return <main>The planner route page</main>;
}

Page.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
