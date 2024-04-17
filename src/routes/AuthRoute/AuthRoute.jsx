import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import React from 'react';
import AdoptCommunity from '../../pages/AdoptCommunity/AdoptCommunity';
import AdoptCommunityDog from '../../pages/AdoptCommunityDog/AdoptCommunityDog';
import MyPage from '../../pages/MyPage/MyPage';
import ProductPetShoppingPage from '../../pages/ProductPetShoppingPage/ProductPetShoppingPage';
import ProductPetDetailPage from '../../pages/ProductPetDetailPage/ProductPetDetailPage';
import ProductPetOrderDetailPage from '../../pages/ProductPetOrderDetailPage/ProductPetOrderDetailPage';
import ProductPetCartPage from '../../pages/ProductPetCartPage/ProductPetCartPage';

function AuthRoute(props) {

    return (
        <>
            <Routes>
                <Route path="/auth/*" element={ <AuthPage /> } />
                <Route path="/account/mypage" element={ <MyPage /> } />
                <Route path="/adoptCommunity" element={ <AdoptCommunity /> } /> //임의로 붙임
                <Route path="/adoptCommunity/dog" element={ <AdoptCommunityDog /> } /> //임의로 붙임
                <Route path="/product/pet/shopping" element={ <ProductPetShoppingPage /> } />
                <Route path="/product/pet/detail/:productId" element={<ProductPetDetailPage />} />
                <Route path="/product/pet/order/detail" element={<ProductPetOrderDetailPage />} />
                <Route path="/product/pet/cart" element={<ProductPetCartPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;