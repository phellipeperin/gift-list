import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

import store from '../store';
import { setUser, clearUser } from '../stores/userStore';

const startListener = (redirect: any) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(
        setUser({
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }),
      );
      redirect('/list');
    } else {
      store.dispatch(clearUser());
      redirect('/login');
    }
  });
};

export default startListener;
