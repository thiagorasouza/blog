import { lexendSans } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface PostProps {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  body: ReactNode;
  summary: string;
  type?: "full" | "preview";
}

export function Post({
  title,
  date,
  slug,
  tags,
  body,
  summary,
  type = "full",
}: PostProps) {
  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center">
        <h2
          className={cn(
            lexendSans.className,
            type === "full" ? "text-3xl" : "text-2xl",
            "font-semibold",
          )}
        >
          {type === "full" ? (
            title
          ) : (
            <Link href={`/posts/${slug}`}>{title}</Link>
          )}
        </h2>
        <p className="min-w-max text-gray-400 md:ml-auto">{date}</p>
      </header>
      <div className={cn("prose")}>{type === "full" ? body : summary}</div>
      <div>
        <ul
          className={cn(
            lexendSans.className,
            "flex flex-wrap gap-4 text-sm",
            "*:rounded-2xl *:bg-gray-300 *:px-7 *:py-2 *:leading-none",
          )}
        >
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
