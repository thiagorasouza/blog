"use server";

import { codeToHtml } from "shiki";

export async function CodeBlock({
  children,
  ...props
}: {
  children: { props: { children: string } };
}) {
  const codeHTML = await codeToHtml(children.props.children, {
    lang: "jsx",
    theme: "one-dark-pro",
  });
  return <div dangerouslySetInnerHTML={{ __html: codeHTML }} {...props}></div>;
}
