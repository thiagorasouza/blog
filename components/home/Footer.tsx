import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <p className="text-center text-sm">
        Built by{" "}
        <Link href="https://github.com/thiagorasouza">Thiago Souza</Link>
      </p>
    </footer>
  );
}
