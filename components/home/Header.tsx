import { lexendSans } from "@/app/fonts";
import { Github } from "@/components/icons/Github";
import { LinkedIn } from "@/components/icons/LinkedIn";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center gap-3 py-1 text-4xl font-semibold md:py-8">
      <h1 className={lexendSans.className}>Thiago&apos;s Blog</h1>
      <nav className="ml-auto hidden gap-9 md:flex">
        <Link href="https://www.linkedin.com/in/thiagorasouza/">
          <LinkedIn />
        </Link>
        <Link href="https://github.com/thiagorasouza">
          <Github />
        </Link>
      </nav>
    </header>
  );
}
