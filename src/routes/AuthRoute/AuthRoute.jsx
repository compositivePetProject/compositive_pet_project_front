import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import RootHeader from '../../components/RootHeader/RootHeader';
import PageContainer from '../../components/PageContainer/PageContainer';
import RootFooter from '../../components/RootFooter/RootFooter';

import React from 'react';
import CommunityBoardPage from '../../pages/CommunityBoardPage/CommunityBoardPage';
import CommunityBoardDogPage from '../../pages/CommunityBoardDogPage/CommunityBoardDogPage';




function AuthRoute(props) {
    return (
        <>
            <RootHeader />
            <PageContainer>
                <Routes>
                    <Route path="/auth/*" element={ <AuthPage /> } />
                    <Route path="/community" element={<CommunityBoardPage />} />
                    <Route path="/community/dog" element={<CommunityBoardDogPage />} />
                </Routes>
            </PageContainer>
            <RootFooter />
        </>
    );
}

export default AuthRoute;