import { Route, Routes } from 'react-router-dom';
import AuthSignupPage from '../AuthSignupPage/AuthSignupPage';
import AuthSigninPage from '../AuthSigninPage/AuthSigninPage';
import OAuthSignupPage from '../OAuthSignupPage/OAuthSignupPage';
import OAuthSigninPage from '../OAuthSigninPage/OAuthSigninPage';


function AuthPage() {
    return (
        <>
            <Routes>
                <Route path="/sign-up" element={ <AuthSignupPage /> } />
                <Route path="/sign-in" element={ <AuthSigninPage /> } />
                <Route path="/oauth2/sign-up" element={ <OAuthSignupPage /> } />
                <Route path="/oauth2/sign-in" element={ <OAuthSigninPage /> } />
            </Routes>
        </>
    );
}

export default AuthPage;