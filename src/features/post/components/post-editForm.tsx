/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { PostsInterface } from "../interfaces";
import TextField from '@mui/material/TextField';

interface Props {
    post: PostsInterface;
    onSubmit: (e: any) => void
}

export const PostEditForm = ({ post: { title, body }, onSubmit }: Props) =>

(
    <div css={css`
          width: 100%;
    `}>
        <form
            onSubmit={onSubmit}
            css={css`
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            .MuiTextField-root {
                min-height: 70px;
            }
        `}
        >

            <TextField name="title" defaultValue={title} multiline />
            <TextField name="body" defaultValue={body} maxRows={10} rows={4} multiline/>
            <Button type="submit" variant="contained" color="warning">
                Save
            </Button>
        </form>
        {/* <Link to='/'>Back to home page</Link> */}
    </div>
);

