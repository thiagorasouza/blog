"use server";

import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export async function getPosts() {
  const contentDir = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "..//content",
  );

  return await readdir(contentDir);
}
