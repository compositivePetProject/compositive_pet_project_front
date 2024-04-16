import './App.css';
import { getPrincipalRequest } from './apis/api/acoountPrincipal';
import PageContainer from './components/PageContainer/PageContainer';
import RootContainer from './components/RootContainer/RootContainer';
import RootFooter from './components/RootFooter/RootFooter';
import RootHeader from './components/RootHeader/RootHeader';
import RootLayout from './components/RootLayout/RootLayout';
import AdoptRoute from './routes/AdoptRoute/AdoptRoute';
import AuthRoute from './routes/AuthRoute/AuthRoute';
import ProductRoute from './routes/ProductRoute/ProductRoute';
import { useQuery } from "react-query";
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
        <RootHeader />
          <PageContainer>
            <AuthRoute /> 
            <ProductRoute />
            <AdoptRoute/>
          </PageContainer>
        <RootFooter />
      </RootContainer>
    </RootLayout>
  );
}

export default App;
