import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import RootHeader from '../../components/RootHeader/RootHeader';
import PageContainer from '../../components/PageContainer/PageContainer';
import RootFooter from '../../components/RootFooter/RootFooter';

import React from 'react';
import CommunityBoardPage from '../../pages/CommunityBoardPage/CommunityBoardPage';
import CommunityBoardDogPage from '../../pages/CommunityBoardDogPage/CommunityBoardDogPage';
import CommunityBoardWritePage from '../../pages/CommunityBoardWritePage/CommunityBoardWritePage';
import { useQuery } from 'react-query';
import { getPrincipalRequest } from '../../apis/api/communityBoard';



// 임시로 추가함.
function AuthRoute(props) {
    const principalQuery = useQuery(["principalQuery"], 
    getPrincipalRequest, 
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
        },
        onError: error => {
        }
    });

    return (
        <>
            <RootHeader />
            <PageContainer>
                <Routes>
                    <Route path="/auth/*" element={ <AuthPage /> } />
                    <Route path="/community/getboards" element={<CommunityBoardPage />} />
                    <Route path="/community/dog" element={<CommunityBoardDogPage />} />
                    <Route path="/community/board/write" element={<CommunityBoardWritePage />} />
                </Routes>
            </PageContainer>
            <RootFooter />
        </>
    );
}

export default AuthRoute;