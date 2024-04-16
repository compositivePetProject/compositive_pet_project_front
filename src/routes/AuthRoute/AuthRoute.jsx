import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import React from 'react';
import AdoptCommunity from '../../pages/AdoptCommunity/AdoptCommunity';
import AdoptCommunityDog from '../../pages/AdoptCommunityDog/AdoptCommunityDog';
import MyPage from '../../pages/MyPage/MyPage';
import ProductPetShoppingPage from '../../pages/ProductPetShoppingPage/ProductPetShoppingPage';
import ProductPetDetailPage from '../../pages/ProductPetDetailPage/ProductPetDetailPage';

function AuthRoute(props) {

    return (
        <>
            <Routes>
                <Route path="/auth/*" element={ <AuthPage /> } />
                <Route path="/account/mypage" element={ <MyPage /> } />
                <Route path="/product/pet/shopping" element={ <ProductPetShoppingPage /> } />
                <Route path="/product/pet/detail/:productId" element={<ProductPetDetailPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;