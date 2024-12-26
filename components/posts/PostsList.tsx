"use server";

import { Post } from "@/components/posts/Post";
import { getPostsFilenames } from "@/lib/getPostsFilenames";

export async function PostsList() {
  const filenames = await getPostsFilenames();

  const promises = filenames.map(async (filename) => {
    const { default: Body, metadata } = await import(`@/content/${filename}`);
    return {
      ...metadata,
      body: <Body />,
    };
  });

  const posts = await Promise.all(promises);

  return posts.map((post, index) => {
    return <Post key={index} {...post} type="preview" />;
  });
}
