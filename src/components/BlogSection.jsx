import { useEffect, useState } from "react";
import "./BlogSection.css";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://win25-jsf-assignment.azurewebsites.net/api/blogs"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        const sorted = data.sort(
          (a, b) => new Date(b.created) - new Date(a.created)
        );

        setPosts(sorted.slice(0, 3));
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blog posts. Please try again later.");
      }
    };

    fetchBlogs();
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
            {error ? (
              <p className="blog-error">{error}</p>
            ) : posts.length > 0 ? (
              posts.map((post) => (
                <BlogCard
                  key={post.id}
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
