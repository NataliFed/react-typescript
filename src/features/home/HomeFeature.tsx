/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const HomeFeature = () => {
   
   const [posts, setPosts] = useState([]);

   useEffect(() => {
       fetch('https://dummyjson.com/posts?limit=10')
       .then((res) => res.json())
       .then((data) => {
           setPosts(data.posts);
       });  
   }, [])
      
            
    return (<div   css={css`
        display: flex;
        flex-direction: column;
        columns: 3;
        justify-content: space-between;
        `}>
            
            {posts.map((posts: any)=>(
            <div key={posts.id} css={css`
                    max-width: 200px;
                    margin-bottom: 10px;
                    border: 2px solid #a3a2a2e1;
                    border-radius: 5px;
                    padding: 15px;
                `}>
                <Link to='../post/PostItem'><p css={css`
                        text-transform: uppercase;
                        text-align: center;
                        text-decoration: none;
                    `}>
                        {posts.title}
                </p></Link>
                <div>{posts.body}</div>
            </div>
        ))}
    </div>
    
    )
}
