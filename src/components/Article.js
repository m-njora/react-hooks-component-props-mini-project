import React from "react";
import blogData from "../data/blog"
console.log (blogData)
function Article({title, date="January 1, 1970",preview}){
  return(
   <div className="Article">
    <article>
       <h3>{title}</h3>
       <small>{date}</small>
       <p>{preview}</p>
     </article>
   </div>

       );
}
export default Article;















