/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { usePost } from "./hooks";


export const PostFeature = () => {
    
    const {body, title} = usePost();

    return (
    <div>
        <h1 css={css`
       text-align: center;
    `}>{title}</h1>
        <p>{body}</p>
        <Link to='/'>Back to home page</Link>
    </div>
);
};
