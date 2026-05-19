import Navbar from "@/components/navbar";
import Sidebar from "@/components/appsidebar";
import AppFooter from "@/components/AppFooter";

import { SidebarProvider } from "@/components/ui/sidebar";

import { cookies } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const defaultOpen =
    cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar />

      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <Navbar />

        <div className="flex-1 px-4">
          {children}
        </div>

        <div className="w-full flex justify-center border-t">
          <AppFooter />
        </div>
      </main>
    </SidebarProvider>
  );
}