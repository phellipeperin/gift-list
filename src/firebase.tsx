import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

import firebaseConfig from './configs/firebaseConfig';
import firebaseListener from './listeners/firebaseListener';

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

firebaseListener();

export default app;
