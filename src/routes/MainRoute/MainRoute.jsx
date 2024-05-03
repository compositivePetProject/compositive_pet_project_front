import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';

function MainRoute() {
    return (
        <>
            <Routes>
              <Route path="/" element={ <MainPage /> } />
            </Routes>
        </>
    );
}

export default MainRoute;