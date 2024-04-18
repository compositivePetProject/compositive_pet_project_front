import { Route, Routes } from 'react-router-dom';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import MyOrderPage from '../MyOrdersPage/MyOrdersPage'
import { useAuthCheck } from "../../hooks/useAuthCheck";

function MyPage() {
    // useAuthCheck();
    return (
        <>
            <Routes>
                <Route path="/profile" element={ <MyProfilePage /> } />
                <Route path="/orders" element={ <MyOrderPage /> } />
            </Routes>
        </>
    );
}

export default MyPage;