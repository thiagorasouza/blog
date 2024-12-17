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
    path: "wc-4.js",
  },
  {
    id: "snippet-6",
    path: "rc-3.jsx",
  },
  {
    id: "snippet-7",
    path: "wc-5.js",
  },
  {
    id: "snippet-8",
    path: "wc-6.js",
  },
  {
    id: "snippet-9",
    path: "wc-7.js",
  },
  {
    id: "snippet-10",
    path: "wc-8.js",
  },
  {
    id: "snippet-11",
    path: "wc-9.js",
  },
  // {
  //   id: "snippet-8",
  //   path: "wc-5.js",
  // },
  // {
  //   id: "snippet-9",
  //   path: "wc-6.js",
  // },
  // {
  //   id: "snippet-10",
  //   path: "wc-7.js",
  // },
  // {
  //   id: "snippet-11",
  //   path: "rc-3.jsx",
  // },
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
