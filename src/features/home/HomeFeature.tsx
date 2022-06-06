/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

export const HomeFeature = () => {
   
   const [posts, setPosts] = useState([]);

   useEffect(() => {
       fetch('https://dummyjson.com/posts?limit=10')
       .then(res => res.json())
       .then((data) => {
           console.log(data, 'data');
           setPosts(data.posts);
       });  
   })
       console.log('Hello Home Feature')
            
    return (<div>{posts.map((posts: any)=><div key={posts.id}>
            <div css={css`
                display: flex;
                flex-direction: column;
                columns: 3;
                justify-content: space-between;
            `}>
                <div css={css`
                    max-width: 200px;
                    margin-bottom: 10px;
                    border: 2px solid #a3a2a2e1;
                    border-radius: 5px;
                    padding: 15px;
                `}>
                    <p css={css`
                        text-transform: uppercase;
                        text-align: center;
                    `}>{posts.title}</p>
                    <div>{posts.body}</div>
                </div>
            </div>
        </div>
        )}
    </div>)
}
