import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col items-stretch gap-10 px-8 py-14 md:px-14 md:py-10 lg:px-10">
      <Header />
      <main className="py-5">{children}</main>
      <Footer />
    </div>
  );
}
