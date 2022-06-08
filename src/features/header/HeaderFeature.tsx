/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MenuNavigation } from "./components"; 
 
export const HeaderFeature = () => (
    <header css={css`
        background: black;

    `}>
        <div css={css`
            max-width: 800px;
            margin: auto;
        `}>
        <MenuNavigation />
        </div>
    </header>
)