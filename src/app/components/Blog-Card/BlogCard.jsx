import React from "react";
import "./blog_card.css";

export default function BlogCard() {
  return (
    <section className="blog_card">
      <div className="img_div">
        <img src="/assets/blog_img.jpg" alt="blog image" />
        <div className="body">
          <h3>How to design effective arts?</h3>
          <p className="mb-3">
            The recording starts with the patter of a summer squall. Later, a
            drifting tone like that of a not-quite-tuned-in radio
          </p>
          <a href="#">Continue reading</a>
        </div>
      </div>
    </section>
  );
}
