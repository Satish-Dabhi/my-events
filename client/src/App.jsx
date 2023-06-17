import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import SignInSignUpForms from './components/user/SignInSignUpForms';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSnackBar } from './redux/common/snackBarSlice';


function App() {
  const dispatch = useDispatch();
  const snackBar = useSelector((state) => state.snackbar);
  const [mainSnackBar, setMainSnackBar] = useState(snackBar);
  useEffect(() => {
    setMainSnackBar(snackBar);
  }, [snackBar]);

  const handleSnackbarClose = () => {
    dispatch(
      updateSnackBar({
        open: false,
        message: '',
        severity: 'success',
      })
    );
  };
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <div className='top-div'></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userAuth" element={<SignInSignUpForms />} />
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route path="/user" element={<ProtectedRoute />}>
            <Route path="/user/profile" element={<Profile />} />
          </Route>

        </Routes>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={mainSnackBar[0].open}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity={mainSnackBar[0].severity} sx={{ width: '100%' }}>
            {mainSnackBar[0].message}
          </Alert>
        </Snackbar>
      </BrowserRouter>
    </>
  );
}

export default App;
