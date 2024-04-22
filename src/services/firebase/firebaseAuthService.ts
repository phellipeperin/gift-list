import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import store from '../../store';
import { auth } from '../../firebase';
import {
  setSuccessMessage,
  setWarningMessage,
} from '../../stores/feedbackStore';

export const createUserEmailPassword = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      store.dispatch(setSuccessMessage('Account created successfully!'));
      // nothing to do, listener is in place
    })
    .catch((error) => {
      store.dispatch(
        setWarningMessage(
          `Ops! Something went wrong: ${error.code} - ${error.message}`,
        ),
      );
    });
};

export const signInEmailPassword = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // nothing to do, listener is in place
    })
    .catch((error) => {
      store.dispatch(
        setWarningMessage(
          `Ops! Something went wrong: ${error.code} - ${error.message}`,
        ),
      );
    });
};
