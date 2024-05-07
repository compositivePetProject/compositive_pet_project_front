import { useEffect } from 'react';
import './App.css';
import { getPrincipalRequest } from './apis/api/acoountPrincipal';
import FixBar from './components/FixBar/FixBar';
import PageContainer from './components/PageContainer/PageContainer';
import RootContainer from './components/RootContainer/RootContainer';
import RootFooter from './components/RootFooter/RootFooter';
import RootHeader from './components/RootHeader/RootHeader';
import RootLayout from './components/RootLayout/RootLayout';
import AdoptRoute from './routes/AdoptRoute/AdoptRoute';
import AuthRoute from './routes/AuthRoute/AuthRoute';
import MapRoute from './routes/MapRoute/MapRoute';
import MyPageRoute from './routes/MyPageRoute/MyPageRoute';
import ProductRoute from './routes/ProductRoute/ProductRoute';
import { useQuery } from "react-query";
import MainPage from './pages/MainPage/MainPage';
import MainRoute from './routes/MainRoute/MainRoute';
function App() {
  
  const principalQuery = useQuery(["principalQuery"], 
    getPrincipalRequest, 
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
        },
        onError: error => {
        }
    });


  return (
    <RootLayout>
      <RootContainer>
        {principalQuery.status === "success" ? <FixBar/> : <></>}
        {/* <RootHeader /> */}
          <PageContainer>
            <MainRoute />
            <AuthRoute /> 
            <ProductRoute />
            <AdoptRoute/>
            <MyPageRoute />
            <MapRoute />
          </PageContainer>
        <RootFooter />
      </RootContainer>
    </RootLayout>
  );
}

export default App;
