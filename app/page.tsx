import { lexendSans } from "@/app/fonts";
import { Github } from "@/components/icons/Github";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col items-stretch gap-10 p-10">
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
      <main className="py-10">
        <article className="flex flex-col gap-6">
          <header className="flex items-center">
            <h2 className={cn(lexendSans.className, "text-2xl font-semibold")}>
              From Thinking React to Thinking Web Components
            </h2>
            <p className="ml-auto text-gray-400">Dec 20, 2024</p>
          </header>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptate ex ad magni esse praesentium animi totam facere quas
              debitis placeat ducimus dolore quisquam ratione, distinctio
              dolorem, odio quae harum!
            </p>
          </div>
          <div>
            <ul
              className={cn(
                lexendSans.className,
                "flex gap-5 text-sm *:rounded-2xl *:bg-gray-300 *:px-7 *:py-2 *:leading-none",
              )}
            >
              <li>React</li>
              <li>Javascript</li>
              <li>WebComponents</li>
            </ul>
          </div>
        </article>
      </main>
      <footer></footer>
    </div>
  );
}
