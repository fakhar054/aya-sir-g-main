import React from "react";
import "./blog_card.css";

export default function BlogCard({ content }) {
  const getWords = (str) => {
    return (
      str.split(" ").slice(0, 6).join(" ") +
      (str.split(" ").length > 6 ? "" : "")
    );
  };
  const getWordsTitle = (str) => {
    const words = str.split(" ");
    return words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "");
  };

  return (
    <section className="blog_card">
      <div className="img_div">
        <img src="/assets/blog_img.jpg" alt="blog image" />
      </div>

      <div className="body">
        <h3>{getWords(content.title)}</h3>
        <p className="mb-3">{getWordsTitle(content.description)}</p>
        <a href="#">Continue reading</a>
      </div>
    </section>
  );
}
