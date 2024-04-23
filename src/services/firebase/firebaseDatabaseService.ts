import { doc, collection, getDoc, setDoc, addDoc, DocumentReference, DocumentData } from 'firebase/firestore';

import { db } from '../../firebase';

export const addDocument = async (collectionName: string, document: any): Promise<DocumentReference> => {
  return await addDoc(collection(db, collectionName), document);
};

export const setDocument = async (path: string, document: any): Promise<void> => {
  await setDoc(doc(db, path), document, { merge: true });
};

export const getDocument = async (path: string): Promise<DocumentData | undefined> => {
  const docRef = doc(db, path);
  const docSnap = await getDoc(docRef);
  return docSnap.data(); // undefined in case it doesn't exist
};