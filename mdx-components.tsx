import { CodeInline } from "@/components/ui/CodeInline";
import { CodeBlock } from "@/components/ui/CodeBlock";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: CodeInline,
    pre: CodeBlock,
    ...components,
  };
}
