import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { PostsList } from "@/components/home/PostsList";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col items-stretch gap-10 p-10">
      <Header />
      <main className="py-10">
        <PostsList />
      </main>
      <Footer />
    </div>
  );
}
