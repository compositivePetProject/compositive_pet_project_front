import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const train = css`   
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

export const show = css`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    align-items: center;
    width: 1344px;
    height: 500px;
    overflow: hidden;
    cursor: pointer;
`;


export const compartment = (curSlide) => css`
    box-sizing: border-box;
    flex-shrink: 0; 
    height: 100%;
    transform: translateX(-${1344 * curSlide}px);
    transition: all 0.4s ease-in-out;
    & > img {
        width: 1344px;
    }
`;

export const prevButton = css`
    position: absolute;
    left: 0px;
    top: 210px;
    width: 50px;
    height: 50px;
    font-size: 50px;
    z-index: 10;
    cursor: pointer;
`;

export const nextButton = css`
    position: absolute;
    right: 0px;
    top: 210px;
    width: 50px;
    height: 50px;
    font-size: 50px;
    z-index: 10;
    cursor: pointer;
`;

export const infoContainer = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 600px auto 0 auto;
    width: 80%;
`;

export const detailContainer = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 50px;
    cursor: pointer;
    & > div:nth-of-type(1) {
        margin-right: 30px;
    }

    & > div:nth-of-type(2) {
        margin-right: 30px;
    }
`;

export const communityContainer = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1080px;
    margin-bottom: 20px;

    & > div:nth-of-type(1) {
        font-size: 19px;
        font-weight: 700;
        cursor: default;
    }
    & > div:nth-of-type(2) {
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        &:hover {
        transition: all 0.2s ease-in-out;
        font-weight: 700;
        color: rgb(255, 64, 129);
    }
    }
`;

export const communityContainerIn = css`
    box-sizing: border-box;
    width: 350px;
    height: 450px;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    box-shadow: 0 0 25px -10px rgba(0, 0, 0, 0.5);
`;

export const communityContainerImage = css`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    & > img {
        width: 100%;
        height: 200px;
    }
`;


export const communityContainerText = css`
   padding: 20px;
   color: rgb(15, 19, 23);
   font-weight: 700;
   font-size: 16px;
   & > div:nth-of-type(1) {
        height: 170px;
        border-bottom: 1px solid #dbdbdb;
        margin-bottom: 10px;
    }
   & > div:nth-of-type(2) {
        display: flex;
        justify-content: space-between;
    }
`;


