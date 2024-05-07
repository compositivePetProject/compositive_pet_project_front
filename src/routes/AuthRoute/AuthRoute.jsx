import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import React from 'react';
import { useQuery } from 'react-query';
import { getPrincipalRequest } from '../../apis/api/communityBoard';
import RootHeader from '../../components/RootHeader/RootHeader';
import PageContainer from '../../components/PageContainer/PageContainer';
import RootFooter from '../../components/RootFooter/RootFooter';



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

                <Routes>
                    <Route path="/auth/*" element={ <AuthPage /> } />           
                </Routes> 
        </>
    );
}

export default AuthRoute;