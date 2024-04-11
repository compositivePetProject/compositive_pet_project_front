import { Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import RootHeader from '../../components/RootHeader/RootHeader';
import PageContainer from '../../components/PageContainer/PageContainer';
import RootFooter from '../../components/RootFooter/RootFooter';
import { useQuery } from "react-query";
import { getPrincipalRequest } from '../../apis/api/acoountPrincipal';
import MyPage from '../../pages/MyPage/MyPage';

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
                    <Route path="/account/mypage" element={ <MyPage /> } />
                </Routes>
            </PageContainer>
            <RootFooter />
        </>
    );
}

export default AuthRoute;