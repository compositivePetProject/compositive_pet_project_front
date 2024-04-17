import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import React from 'react';
import AdoptCommunity from '../../pages/AdoptCommunity/AdoptCommunity';
import AdoptCommunityDog from '../../pages/AdoptCommunityDog/AdoptCommunityDog';

function AuthRoute(props) {

    return (
        <>
            <Routes>
                <Route path="/auth/*" element={ <AuthPage /> } />
                <Route path="/adoptCommunity" element={ <AdoptCommunity /> } /> //임의로 붙임
                <Route path="/adoptCommunity/dog" element={ <AdoptCommunityDog /> } /> //임의로 붙임
            </Routes>
        </>
    );
}

export default AuthRoute;