
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import RootHeader from '../../components/RootHeader/RootHeader';
import PageContainer from '../../components/PageContainer/PageContainer';
import RootFooter from '../../components/RootFooter/RootFooter';

import React, { useEffect } from 'react';
import CommunityBoardPage from '../../pages/CommunityBoardPage/CommunityBoardPage';
import CommunityBoardDogPage from '../../pages/CommunityBoardDogPage/CommunityBoardDogPage';
import CommunityBoardWritePage from '../../pages/CommunityBoardWritePage/CommunityBoardWritePage';
import { useQuery } from 'react-query';
import { getPrincipalRequest } from '../../apis/api/communityBoard';
import CommunityBoardDetailPage from '../../pages/CommunityBoardDetailPage/CommunityBoardDetailPage';
import CommunityBoardCatPage from '../../pages/CommunityBoardCatPage/CommunityBoardCatPage';
import CoummunityBoardAdminPage from '../../pages/CommunityBoardAdminPage/CoummunityBoardAdminPage';
import CommunityBoardAdminDetailPage from '../../pages/CommunityBoardAdminDetailPage/CommunityBoardAdminDetailPage';
import CommunityBoardAdminRegisterPage from '../../pages/CommunityBoardAdminRegisterPage/CommunityBoardAdminRegisterPage';
import CommunityBoardCommentEditPage from '../../pages/CommunityBoardCommentEditPage/CommunityBoardCommentEditPage';
import CommunityBoardCommentWritePage from '../../pages/CommunityBoardCommentWritePage/CommunityBoardCommentWritePage';
import CommunityBoardAdminEditPage from '../../pages/CommunityBoardAdminEditPage/CommunityBoardAdminEditPage';
import CommunityBoardEditPage from '../../pages/CommunityBoardEditPage/CommunityBoardEditPage';

function CommunityBoardRoute(props) {
    const [ searchParam ] = useSearchParams();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [searchParam, pathname]);

    return (
        <>
            <Routes>
                <Route path="/community/getboards" element={<CommunityBoardPage />} />
                <Route path="/community/dog" element={<CommunityBoardDogPage />} />
                <Route path='/community/cat' element={<CommunityBoardCatPage />} /> 
                <Route path="/community/board/write" element={<CommunityBoardWritePage />} />
                <Route path="/community/board" element={<CommunityBoardDetailPage />} />
                <Route path="/community/board/update/:boardId" element={<CommunityBoardEditPage />} />
                <Route path="/community/admin/list/boards" element={<CoummunityBoardAdminPage />} />
                <Route path="/community/admin/:adminBoardId" element={<CommunityBoardAdminDetailPage />} />
                <Route path="/community/admin/noticewrite" element={<CommunityBoardAdminRegisterPage />} />
                <Route path="/community/update/admin/:communityBoardAdminId" element={<CommunityBoardAdminEditPage />} />
                <Route path="/community/comment/:boardId" element={<CommunityBoardCommentWritePage />} />
                <Route path="/community/update/comment" element={<CommunityBoardCommentEditPage />}  />           
            </Routes>
        </>
    );
}


export default CommunityBoardRoute;