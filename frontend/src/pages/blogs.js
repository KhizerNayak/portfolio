// src/pages/BlogsSection.js
import React from 'react';
import 'animate.css';
import '../cssFold/blogs.css'; // Ensure the correct path to the CSS file


const blogs = [
  {
    title: "Blog Post 1",
    excerpt: "This is a brief summary of the first blog post. It gives a quick overview of what the post is about.",
    author: "Author Name",
    date: "August 1, 2024",
    image: 'path/to/image1.jpg',
  },
  {
    title: "Blog Post 2",
    excerpt: "This is a brief summary of the second blog post. It gives a quick overview of what the post is about.",
    author: "Author Name",
    date: "August 2, 2024",
    image: 'path/to/image2.jpg',
  },
  {
    title: "Blog Post 3",
    excerpt: "This is a brief summary of the third blog post. It gives a quick overview of what the post is about.",
    author: "Author Name",
    date: "August 3, 2024",
    image: 'path/to/image3.jpg',
  },
];

export const BlogsSection = () => {
  return (
    <section className="blogs-section">
      <h2>Blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card animate__animated animate__fadeInUp">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <p className="excerpt">{blog.excerpt}</p>
            <p className="author-date">{blog.author} | {blog.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
