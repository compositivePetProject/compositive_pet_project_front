/** @jsxImportSource @emotion/react */
import RootHeader from "../RootHeader/RootHeader";
import * as s from "./style";

function RootLayout({ children }) {
    return (
        <>
            <div css={s.background}>
            {/* <RootHeader /> */}
                <div css={s.layout}>
                    { children }
                </div>
            </div>
        </>
    );
}

export default RootLayout;