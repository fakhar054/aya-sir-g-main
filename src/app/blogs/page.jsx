import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BlogCard from "../components/Blog-Card/BlogCard";
import "./blogs.css";

export default function page() {
  return (
    <section className="blogs margin_navbar">
      <div className="container">
        <div className="card_div py-5 ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
}
