import './App.css';
import RootContainer from './components/RootContainer/RootContainer';
import RootLayout from './components/RootLayout/RootLayout';
import AdoptCommunity from './pages/AdoptCommunity/AdoptCommunity';
import AuthRoute from './routes/AuthRoute/AuthRoute';

function App() {
  return (
    <RootLayout>
      <RootContainer>
        <AuthRoute />
      </RootContainer>
    </RootLayout>
  );
}

export default App;
