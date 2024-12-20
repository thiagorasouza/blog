import { lexendSans } from "@/app/fonts";
import { Github } from "@/components/icons/Github";
import { LinkedIn } from "@/components/icons/LinkedIn";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1200px] flex-col items-stretch gap-10 bg-gray-400 p-10">
      <header className="flex items-center gap-3 bg-blue-400 py-8 text-4xl font-semibold">
        <h1 className={lexendSans.className}>Thiago&apos;s Blog</h1>
        <nav className="ml-auto flex gap-9">
          <Link href="https://www.linkedin.com/in/thiagorasouza/">
            <LinkedIn />
          </Link>
          <Link href="https://github.com/thiagorasouza">
            <Github />
          </Link>
        </nav>
      </header>
      <section className="min-h-screen bg-red-400"></section>
      <footer className="min-h-[200px] bg-green-400"></footer>
    </main>
  );
}
