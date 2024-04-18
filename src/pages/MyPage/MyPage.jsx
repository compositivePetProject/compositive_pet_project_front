import { Route, Routes } from 'react-router-dom';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import MyOrderPage from '../MyOrdersPage/MyOrdersPage'
import MyAdoptList from '../MyAdoptList/MyAdoptList';

function MyPage() {
    return (
        <>
            <Routes>
                <Route path="/profile" element={ <MyProfilePage /> } />
                <Route path="/orders" element={ <MyOrderPage /> } />
                <Route path='/adopt' element={ <MyAdoptList/> } />
            </Routes>
        </>
    );
}

export default MyPage;