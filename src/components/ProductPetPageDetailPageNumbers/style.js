import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center ;
    align-items: center;
    margin-top: 5px;
    width: 100%;
`;

export const pageNumbers = css`
    display: flex;
`

export const pageButton = (isSelected) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
    border-radius: 2px;
    min-width: 28px;
    height: 28px;
    font-weight: 700;
    background-color: ${isSelected ? "#3d3a35" : "white"};
    text-decoration: none;
    font-size: 10px;
    color: ${isSelected ? "white" : "#777777"};
    padding: 0; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 
    outline: none; 
    
    &:hover {
        background-color: ${isSelected ? "#3d3a35" : "#f0f0f0"};
    }
`;
