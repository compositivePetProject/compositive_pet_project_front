import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const train = css`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

export const show = css`
    /* position: fixed; */
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 550px;
    overflow: hidden;
    cursor: pointer;
`;


export const compartment = (curSlide) => css`
    flex-shrink: 0; 
    transform: translateX(-${100 * curSlide}%);
    transition: all 0.4s ease-in-out;
    & > img {
        width: 100%;
    }
`;

export const prevButton = css`
    position: absolute;
    left: 0;
    top: 225px;
    width: 50px;
    height: 50px;
    font-size: 50px;
    z-index: 10;
    cursor: pointer;
`;

export const nextButton = css`
    position: absolute;
    right: 0;
    top: 225px;
    width: 50px;
    height: 50px;
    font-size: 50px;
    z-index: 10;
    cursor: pointer;
`;

export const infoContainer = css`
    margin: 600px 150px 50px;
`;

export const detailContainer = css`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    & > div:nth-of-type(1) {
        margin-right: 30px;
    }

    & > div:nth-of-type(2) {
        margin-right: 30px;
    }
`;

export const communityContainer = css`
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
    & > div:nth-of-type(1) {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

export const communityContainerIn = css`
    width: 350px;
    height: 450px;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
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


