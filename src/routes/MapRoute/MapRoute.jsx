import { Route, Routes } from "react-router-dom";
import KakaoMap from "../../pages/KakaoMap/KakaoMap";


function MapRoute() {
    return (
        <>
            <Routes>
                <Route path="/kakao/map" element={ <KakaoMap /> } />
            </Routes>
        </>
    );
}

export default MapRoute;