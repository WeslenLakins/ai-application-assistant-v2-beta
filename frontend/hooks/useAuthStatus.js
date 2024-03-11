import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAuthStatus = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
    setCheckingStatus(false);
  }, [user]);

  return { signedIn, checkingStatus };
};
