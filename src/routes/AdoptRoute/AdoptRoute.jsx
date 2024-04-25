import { Route, Routes } from 'react-router-dom';
import React from 'react';
import AdoptCommunity from '../../pages/AdoptCommunity/AdoptCommunity';
import AdoptCommunityDog from '../../pages/AdoptCommunityDog/AdoptCommunityDog';
import AdoptCommunityCat from '../../pages/AdoptCommunityCat/AdoptCommunityCat';
import AdoptCommunityRegister from '../../pages/AdoptCommunityRegister/AdoptCommunityRegister';
import AdoptCommunityDetail from '../../pages/AdoptCommunityDetail/AdoptCommunityDetail';
import AdoptCommunityAdmin from '../../pages/AdoptCommunityAdmin/AdoptCommunityAdmin';
import AdoptCommunityAdminDetail from '../../pages/AdoptCommunityAdminDetail/AdoptCommunityDetail';
import AdoptCommunityUpdate from '../../pages/AdoptCommunityUpdate/AdoptCommunityEdit';
import AdoptCommunityEdit from '../../pages/AdoptCommunityUpdate/AdoptCommunityEdit';

function AdoptRoute(props) {

    return (
        <>
            <Routes>
                <Route path="/adoptCommunity" element={ <AdoptCommunity />} /> 
                <Route path="/adoptCommunity/admin" element={ <AdoptCommunityAdmin />} /> 
                <Route path="/adoptCommunity/dog" element={ <AdoptCommunityDog /> }/> 
                <Route path="/adoptCommunity/cat" element={ <AdoptCommunityCat /> }/> 
                <Route path="/adoptCommunity/register" element={ <AdoptCommunityRegister />} />
                <Route path="/adoptCommunity/edit" element={ <AdoptCommunityEdit />} />
                <Route path="/adoptCommunityDetail" element={<AdoptCommunityDetail />}/>
                <Route path="/adoptCommunity/admin/:noticeId" element={ <AdoptCommunityAdminDetail />} /> 
            </Routes>
        </>
    );
}

export default AdoptRoute;