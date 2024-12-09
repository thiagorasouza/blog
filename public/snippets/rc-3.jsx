// React
function BlogPost({ text }) {
  return ( 
    <div>{ text || "Fallback text" }</div>
  );
}

export { BlogPost };

// Usage
<BlogPost text="The post text" />