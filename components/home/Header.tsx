import { lexendSans } from "@/app/fonts";
import { Github } from "@/components/icons/Github";
import { LinkedIn } from "@/components/icons/LinkedIn";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center gap-3 py-8 text-4xl font-semibold">
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
  );
}
