import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { PostsList } from "@/components/home/PostsList";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col items-stretch gap-10 px-8 py-14 md:px-14 md:py-10 lg:px-10">
      <Header />
      <main className="py-5 md:py-10">
        <PostsList />
      </main>
      <Footer />
    </div>
  );
}
