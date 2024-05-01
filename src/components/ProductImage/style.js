import { css } from "@emotion/react";

export const container = css`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const image = css`
    display: block;
    width: 100%;
    height: 100%;
    
`;
export const target = (offset, opacity) => css`
    ${image}
    display: block;
    position: absolute;
    left: ${offset.left}px; 
    top: ${offset.top}px;
    width: 305px; 
    height: 305px; 
    border: 1px solid rgb(255, 255, 255, 0.45);
    background-color: #89898947;
    opacity: ${opacity};
    cursor: pointer;
`;

export const enlargedImage = (src, offset, sourceRect) =>  css`
    position: absolute;
    top: 30px;
    left: 800px;
    width: 600px; 
    height: 600px; 
    background-image: url(${src});
    background-size: 160%;
    background-repeat: no-repeat;
    background-position: ${-offset.left}px ${-offset.top}px; 
    z-index: 100;
`;
