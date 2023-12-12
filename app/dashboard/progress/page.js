import RootLayout from "@/app/layout";
import DashboardLayout from "../page";

export default function Page() {
  return <main>The progress via route page</main>;
}

Page.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
