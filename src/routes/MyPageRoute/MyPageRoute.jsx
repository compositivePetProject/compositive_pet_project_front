import { Route, Routes } from 'react-router-dom';
import MyPage from '../../pages/MyPage/MyPage';

function MyPageRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/account/mypage/*" element={ <MyPage /> } />
            </Routes>
        </>
    );
}

export default MyPageRoute;