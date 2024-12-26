import { Post } from "@/components/posts/Post";
import { getPostsFilenames } from "@/lib/getPostsFilenames";

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
  const postsFilenames = await getPostsFilenames();

  const slugs = postsFilenames.map((filename) => {
    const slug = filename.slice(0, filename.lastIndexOf("."));
    return { slug };
  });

  return slugs;
}

export const dynamicParams = false;
