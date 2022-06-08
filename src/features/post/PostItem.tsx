/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

export const PostItem = () => {
   
   const [post, setPost] = useState([]);

   useEffect(() => {
       fetch('https://dummyjson.com/posts/1')
       .then((res) => res.json())
       .then((data) => {
           setPost(data.post);
       });  
   }, [])
      
            
    return (<div>{post.map((post: any)=>(
            <div key={post.id} css={css`
                    max-width: 200px;
                    margin-bottom: 10px;
                    border: 2px solid #a3a2a2e1;
                    border-radius: 5px;
                    padding: 15px;
                `}>
                <p css={css`
                        text-transform: uppercase;
                        text-align: center;
                        text-transform: uppercase;
                    `}>
                        {post.title}
                </p>
                <div>{post.body}</div>
            </div>
        ))}
    </div>)
}