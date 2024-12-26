import { Post } from "@/components/posts/Post";
import { getPosts } from "@/lib/getPosts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Body, metadata } = await import(`@/content/${slug}.mdx`);

  return <Post {...metadata} body={<Body />} />;
}

export async function generateStaticParams() {
  const contentFilenames = await getPosts();

  const slugs = contentFilenames.map((file) => {
    const slug = file.slice(0, file.lastIndexOf("."));
    return { slug };
  });

  return slugs;
}

export const dynamicParams = false;
