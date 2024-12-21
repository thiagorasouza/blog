"use server";

import { PostsList } from "@/components/posts/PostsList";

export default async function HomePage() {
  return <PostsList />;
}
