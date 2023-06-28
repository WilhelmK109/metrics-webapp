import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import CryptoList from './components/CryptoList';
import CryptoDetails from './components/CryptoDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/CoinInfo/:Name" element={<CryptoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
