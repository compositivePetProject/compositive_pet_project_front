import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import AdoptCommunityDog from '../../pages/AdoptCommunityDog/AdoptCommunityDog';
import AdoptCommunityCat from '../../pages/AdoptCommunityCat/AdoptCommunityCat';
import AdoptCommunityBoardListPageEx from '../../pages/AdoptCommunityExample/AdoptCommunityBoardListPageEx/AdoptCommunityBoardListPageEx';
import AdoptCommunityBoardDetailPage from '../../pages/AdoptCommunityExample/AdoptCommunityBoardDetailPage/AdoptCommunityBoardDetailPage';
import AdoptCommunityBoardWritePage from '../../pages/AdoptCommunityExample/AdoptCommunityBoardWritePage/AdoptCommunityBoardWritePage';

function AdoptRoute(props) {
    const [ searchParam ] = useSearchParams();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [searchParam, pathname]);

    return (
        <>
            <Routes>
                <Route path="/adoptcommunity/dog" element={ <AdoptCommunityDog /> }/> 
                <Route path="/adoptcommunity/cat" element={ <AdoptCommunityCat /> }/> 
                <Route path="/adoptcommunity" element={<AdoptCommunityBoardListPageEx/>} />
                <Route path="/adoptcommunity/detail" element={<AdoptCommunityBoardDetailPage/>} />
                <Route path="/adoptcommunity/write" element={<AdoptCommunityBoardWritePage />} />
            </Routes>
        </>
    );
}

export default AdoptRoute;