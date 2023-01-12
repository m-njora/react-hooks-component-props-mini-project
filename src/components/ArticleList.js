import React from "react";
import Article from "./Article"
import blogData from "../data/blog"
console.log(blogData);

function ArticleList({ posts }) {
    console.log(posts);
    let postArticle = posts.map((post) => (
      <Article
      key = {post.id}
      title = {post.title}
      date = {post.date}
      preview = {post.preview}/>
    ))
    return (
        <div id="main">
          <main id="main">
           {postArticle}
          </main>
        </div>
      );
    }
  export default ArticleList;
  

