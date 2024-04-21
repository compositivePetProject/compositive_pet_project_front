import { Route, Routes } from 'react-router-dom';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import MyOrderPage from '../MyOrdersPage/MyOrdersPage'
import { useAuthCheck } from "../../hooks/useAuthCheck";
import MyReviewsPage from '../MyReviewsPage/MyReviewsPage';
import MyReviewWritePage from '../MyReviewWritePage/MyReviewWritePage';
import MyWroteReviewsPage from '../MyWroteReviewsPage/MyWroteReviewsPage';

function MyPage() {
    // useAuthCheck();
    return (
        <>
            <Routes>
                <Route path="/profile" element={ <MyProfilePage /> } />
                <Route path="/orders" element={ <MyOrderPage /> } />
                <Route path="/reviews" element={ <MyReviewsPage />} />
                <Route path="/review/write/:productId" element={ <MyReviewWritePage /> } />
                <Route path="/review/wrote" element={ <MyWroteReviewsPage /> } />
            </Routes>
        </>
    );
}

export default MyPage;