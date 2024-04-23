import store from '../../store';
import Catalog from '../../models/Catalog';
import { CATALOG_COLLECTION_NAME } from '../../constants/firebaseConstants';
import { addDocument, getDocument } from '../firebase/firebaseDatabaseService';

// Inner Functions
const getCatalogPathFromUser = (userId: string): string => {
  return `${CATALOG_COLLECTION_NAME}/${userId}`;
};

const getDefaultCatalog = (): Catalog => ({
  name: 'My New Gift List',
  description: 'Tell us a bit what is this list about?',
  sections: [],
});


// Exported Functions
export const loadCatalog = async (id: string, userId: string): Promise<Catalog> => {
  // If no userId, use the current user
  const finalUserId = userId || store.getState().user.id;
  console.log(id, finalUserId);
  return {} as Catalog; // TODO
};

export const loadCatalogListFromCurrentUser = async (): Promise<Array<Catalog>> => {
  const userId = store.getState().user.id;
  const list = await getDocument(getCatalogPathFromUser(userId));
  console.log(list);
  return [];
};

export const createCatalog = async (): Promise<Catalog> => {
  const userId = store.getState().user.id;
  const data = await addDocument(getCatalogPathFromUser(userId), getDefaultCatalog());
  console.log(data);
  return getDefaultCatalog();
};