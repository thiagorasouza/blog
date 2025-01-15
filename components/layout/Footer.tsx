import { lexendSans } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <p className={cn(lexendSans.className, "text-center text-sm")}>
        Built by <Link href="https://thiago-souza.com/">Thiago Souza</Link>
      </p>
    </footer>
  );
}
