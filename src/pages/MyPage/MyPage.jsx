import { Route, Routes } from 'react-router-dom';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import MyOrderPage from '../MyOrdersPage/MyOrdersPage'
import MyAdoptList from '../MyAdoptList/MyAdoptList';
import MyReviewsPage from '../MyReviewsPage/MyReviewsPage';
import MyReviewWritePage from '../MyReviewWritePage/MyReviewWritePage';
import MyWroteReviewsPage from '../MyWroteReviewsPage/MyWroteReviewsPage';
import MyCommunityBoardsPage from '../MyCommunityBoardsPage/MyCommunityBoardsPage';


function MyPage() {
    return (
        <>
            <Routes>
                <Route path="/profile" element={ <MyProfilePage /> } />
                <Route path="/orders" element={ <MyOrderPage /> } />
                <Route path='/adopt' element={ <MyAdoptList/> } />
                <Route path="/reviews" element={ <MyReviewsPage />} />
                <Route path="/review/write/:productId" element={ <MyReviewWritePage /> } />
                <Route path="/review/wrote" element={ <MyWroteReviewsPage /> } />
                <Route path="/community/boards" element={<MyCommunityBoardsPage />} />
            </Routes>
        </>
    );
}

export default MyPage;