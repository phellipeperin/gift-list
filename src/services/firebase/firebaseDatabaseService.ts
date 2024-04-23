import { doc, collection, getDoc, setDoc, addDoc, DocumentReference, DocumentData } from 'firebase/firestore';

import { FirebaseDocumentEntry } from '../../models/Firebase';
import { db } from '../../firebase';

export const getDocumentDataByRef = async (docRef: DocumentReference): Promise<DocumentData | undefined> => {
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return undefined;
};

export const addDocument = async (collectionName: string, document: any): Promise<DocumentReference> => {
  const docRef = await addDoc(collection(db, collectionName), document);
  return docRef;
};

export const setDocument = async (path: string, document: any): Promise<void> => {
  await setDoc(doc(db, path), document, { merge: true });
};

export const getDocument = async (path: string): Promise<FirebaseDocumentEntry> => {
  const docRef = doc(db, path);
  return {
    id: docRef.id,
    data: await getDocumentDataByRef(docRef),
  };
};