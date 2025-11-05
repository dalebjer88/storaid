import React, { useEffect, useState } from "react";
import "./BlogSection.css";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://win25-jsf-assignment.azurewebsites.net/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.created) - new Date(a.created)
        );
        setPosts(sorted.slice(0, 3));
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section className="blog-section" aria-labelledby="blog-heading">
      <div className="container">
        <div className="blog-content">
          <h4>Latest Blog and News</h4>

          <div className="blog-header">
            <h3>Check Out Our Latest Blog and News Update</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi non sodales augue. Phasellus eget elit
              gravida.
            </p>
          </div>

          <div className="blog-cards">
            {posts.length > 0 ? (
              posts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  imageUrl={post.imageUrl}
                  created={post.created}
                />
              ))
            ) : (
              <p>Loading blogs...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
