import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import SignInSignUpForms from './components/user/SignInSignUpForms';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userAuth" element={<SignInSignUpForms />} />
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route path="/user" element={<ProtectedRoute />}>
            <Route path="/user/profile" element={<Profile />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
