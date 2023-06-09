import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
