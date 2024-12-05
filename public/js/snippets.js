const snippets = [
  {
    id: "snippet-1",
    path: "rc-1.jsx",
  },
  {
    id: "snippet-2",
    path: "wc-1.js",
  },
  {
    id: "snippet-3",
    path: "wc-2.js",
  },
  {
    id: "snippet-4",
    path: "wc-3.js",
  },
  {
    id: "snippet-5",
    path: "rc-1.jsx",
  },
  {
    id: "snippet-6",
    path: "wc-4.js",
  },
];

for (const snippet of snippets) {
  const element = document.getElementById(snippet.id);

  fetch(`./snippets/${snippet.path}`)
    .then((result) => result.text())
    .then((code) => {
      element.textContent = code;
      hljs.highlightElement(element);
    });
}
