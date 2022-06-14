/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { PostsInterface } from "../interfaces"


interface Props {
    post: PostsInterface
}

export const PostItem = ({ post: { id, title, body, } }: Props) => {
    return (
        <div css={css`
                    max-width: 200px;
                    margin-bottom: 10px;
                    border: 2px solid #a3a2a2e1;
                    border-radius: 5px;
                    padding: 15px;
                `}>
            <h3 css={css`
                        text-transform: uppercase;
                        text-align: center;
                        text-decoration: underline;
                        cursor: pointer;
                    `}><Link to={`/post/${id}`}>{title}</Link>

            </h3>
            <div css={css`
                height: 160px;
                overflow: hidden;
            `}>{body}</div>
        </div>
    )
}