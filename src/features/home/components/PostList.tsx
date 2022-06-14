/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostsInterface } from "../interfaces";
import { PostItem } from "./PostItem";


interface Props {
    posts: PostsInterface[];
}


export const PostList = ({ posts }: Props) => {

    return (<div css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        `}>

        {posts.map((post) => (
            <PostItem key={post.id} post={post} />
        ))}
    </div>

    )
}
