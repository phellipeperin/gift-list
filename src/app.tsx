import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import firebaseListener from './listeners/firebaseListener';

/*
  This component is used in the root level and contains all the basic globals functionalities for the application:
  - global listeners
  - feedback notifications
  etc
  It also injects all the routes inside it via the router, so global styles/components can be applied here if needed.
*/
function App() {
  const navigate = useNavigate();

  const redirect = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    firebaseListener(redirect);
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
