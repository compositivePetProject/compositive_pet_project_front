import './App.css';
import RootContainer from './components/RootContainer/RootContainer';
import RootLayout from './components/RootLayout/RootLayout';
import AdoptCommunity from './pages/AdoptCommunity/AdoptCommunity';
import AuthRoute from './routes/AuthRoute/AuthRoute';
import ProductRoute from './routes/ProductRoute/ProductRoute';

function App() {
  return (
    <RootLayout>
      <RootContainer>
        <AuthRoute /> 
        <ProductRoute />
      </RootContainer>
    </RootLayout>
  );
}

export default App;
