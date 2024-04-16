import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import React from 'react';
import AdoptCommunity from '../../pages/AdoptCommunity/AdoptCommunity';
import AdoptCommunityDog from '../../pages/AdoptCommunityDog/AdoptCommunityDog';
import MyPage from '../../pages/MyPage/MyPage';
import ProductPetShoppingPage from '../../pages/ProductPetShoppingPage/ProductPetShoppingPage';
import ProductPetDetailPage from '../../pages/ProductPetDetailPage/ProductPetDetailPage';
import AdoptCommunityCat from '../../pages/AdoptCommunityCat/AdoptCommunityCat';
import AdoptCommunityRegister from '../../pages/AdoptCommunityRegister/AdoptCommunityRegister';

function AdoptRoute(props) {

    return (
        <>
            <Routes>
                <Route path="/adoptCommunity" element={ <AdoptCommunity />} /> 
                <Route path="/adoptCommunity/1" element={ <AdoptCommunity />} />  
                <Route path="/adoptCommunity/dog" element={ <AdoptCommunityDog /> }/> 
                <Route path="/adoptCommunity/cat" element={ <AdoptCommunityCat /> }/> 
                <Route path="/adoptCommunity/register" element={ <AdoptCommunityRegister />} />


            </Routes>
        </>
    );
}

export default AdoptRoute;