import { Route, Routes } from 'react-router-dom';
import OAuthSignupPage from '../OAuthSignupPage/OAuthSignupPage';
import OAuthSigninPage from '../OAuthSigninPage/OAuthSigninPage';
import AuthenticationPage from '../AuthenticationPage/AuthenticationPage';

function AuthPage() {
    return (
        <>
            <Routes>
                <Route path="/authentication" element={ <AuthenticationPage /> } />
                <Route path="/oauth2/sign-up" element={ <OAuthSignupPage /> } />
                <Route path="/oauth2/sign-in" element={ <OAuthSigninPage /> } />
            </Routes>
        </>
    );
}

export default AuthPage;