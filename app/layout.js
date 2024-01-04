import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { PlannerContextProvider } from "@/lib/context/plannerContext";
import { TaskContextProvider } from "@/lib/context/taskContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Habitude",
  description: "Your Daily Nudge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PlannerContextProvider>
            <TaskContextProvider>{children}</TaskContextProvider>
          </PlannerContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
