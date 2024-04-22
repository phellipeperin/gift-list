import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

import store from '../store';
import { setUser, clearUser } from '../stores/userStore';

const startListener = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      store.dispatch(setUser({ id: user.uid }));
      // TODO: redirect somewhere
    } else {
      store.dispatch(clearUser());
    }
  });
};

export default startListener;