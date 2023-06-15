import CryptoJS from 'crypto-js';
import { useEffect, useState } from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import { getLocalStorageObject } from '../services/utils';
import { LOCAL_OBJECT_SECRET_KEY } from '../services/utils/constant';


const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = getLocalStorageObject('token');
    const loggedInUser = user && CryptoJS.AES.decrypt(user, LOCAL_OBJECT_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    user && setUserData(JSON.parse(loggedInUser));
  }, []);

  return <Dashboard userData={userData?.user} />;
};

export default Profile;
