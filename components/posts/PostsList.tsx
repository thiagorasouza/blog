"use server";

import { Post } from "@/components/posts/Post";
import { getContentFilenames } from "@/lib/getPosts";

export async function PostsList() {
  const filenames = await getContentFilenames();

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
