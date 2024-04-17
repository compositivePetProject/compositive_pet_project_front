import { Route, Routes } from 'react-router-dom';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import MyOrderPage from '../MyOrdersPage/MyOrdersPage'

function MyPage() {
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