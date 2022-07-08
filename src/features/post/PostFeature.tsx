/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { usePost } from "./hooks";
import { PostEditForm, PostForm } from './components'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export const PostFeature = () => {

    const { post, onEditPostSubmit, isEdit } = usePost();

    return (
        <div css={css`
                display: flex;
                justify-content: space-between;
              
            `}>
            {isEdit ? (<PostEditForm post={post} onSubmit={onEditPostSubmit} />) : (<PostForm post={post} />)}
            {!isEdit && <Link to={`/post/${post.id}/edit`}>
                <ModeEditIcon css={css`
                        cursor: pointer;
                    `} />
            </Link>}
        </div>
    );
};
