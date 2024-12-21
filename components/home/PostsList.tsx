import { lexendSans } from "@/app/fonts";
import { cn } from "@/lib/utils";

export function PostsList() {
  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center">
        <h2 className={cn(lexendSans.className, "text-2xl font-semibold")}>
          From Thinking React to Web Components
        </h2>
        <p className="min-w-max text-gray-400 md:ml-auto">Dec 20, 2024</p>
      </header>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          voluptate ex ad magni esse praesentium animi totam facere quas debitis
          placeat ducimus dolore quisquam ratione, distinctio dolorem, odio quae
          harum!
        </p>
      </div>
      <div>
        <ul
          className={cn(
            lexendSans.className,
            "flex flex-wrap gap-4 text-sm",
            "*:rounded-2xl *:bg-gray-300 *:px-7 *:py-2 *:leading-none",
          )}
        >
          <li>React</li>
          <li>Javascript</li>
          <li>WebComponents</li>
        </ul>
      </div>
    </article>
  );
}
