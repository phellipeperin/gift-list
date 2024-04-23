import store from '../../store';
import Catalog from '../../models/Catalog';
import { CATALOG_COLLECTION_NAME } from '../../constants/firebaseConstants';
import { addDocument, getDocument } from '../firebase/firebaseDatabaseService';

// Inner Functions
const getDefaultCatalog = (userId: string): Catalog => ({
  name: 'My New Gift List',
  description: 'Tell us a bit what is this list about?',
  userId,
  sections: [],
});

// Exported Functions
export const loadCatalog = async (id: string): Promise<Catalog | null> => {
  const doc = await getDocument(`${CATALOG_COLLECTION_NAME}/${id}`);
  if (doc.data) {
    return doc.data as Catalog;
  }
  return null;
};

export const loadCatalogListFromCurrentUser = async (): Promise<Array<Catalog>> => {
  const userId = store.getState().user.id;
  if (userId) {
    // TODO
  }
  return [];
};

export const createCatalog = async (): Promise<string> => {
  const userId = store.getState().user.id;
  const docRef = await addDocument(CATALOG_COLLECTION_NAME, getDefaultCatalog(userId));
  return docRef.id;
};