/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { PostsInterface } from "../interfaces";

interface Props {
    post: PostsInterface;
}

export const PostForm = ({ post: { title, body } }: Props) =>
(
    <div>
        <div css={css`
                display: flex;
                justify-content: space-between;
            `}>
            <h1 css={css`
                    text-align: center;
                `}>{title}</h1>
            
        </div>
        <p>{body}</p>
        <Link to='/'>Back to home page</Link>
    </div>
);

