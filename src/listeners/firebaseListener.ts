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
      redirect('/catalog');
    } else {
      store.dispatch(clearUser());
      // TODO: some pages are public and should not be affected by this redirect!
      redirect('/login');
    }
  });
};

export default startListener;
