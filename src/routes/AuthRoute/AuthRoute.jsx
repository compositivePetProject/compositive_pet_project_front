import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import RootHeader from '../../components/RootHeader/RootHeader';
import PageContainer from '../../components/PageContainer/PageContainer';
import RootFooter from '../../components/RootFooter/RootFooter';

import React from 'react';
import AdoptCommunity from '../../pages/AdoptCommunity/AdoptCommunity';
import AdoptCommunityDog from '../../pages/AdoptCommunityDog/AdoptCommunityDog';

function AuthRoute(props) {
    return (
        <>
            <RootHeader />
            <PageContainer>
                <Routes>
                    <Route path="/auth/*" element={ <AuthPage /> } />
                    <Route path="/adoptCommunity" element={ <AdoptCommunity /> } />
                    <Route path="/adoptCommunity/dog" element={ <AdoptCommunityDog /> } />
                </Routes>
            </PageContainer>
            <RootFooter />
        </>
    );
}

export default AuthRoute;