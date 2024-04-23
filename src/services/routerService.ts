import Catalog from '../models/Catalog';

import { loadCatalogListFromCurrentUser, loadCatalog } from './entities/catalogService';

export async function catalogListRouteLoader(): Promise<Array<Catalog>> {
  return loadCatalogListFromCurrentUser();
}

export async function catalogItemRouteLoader({ params }: any): Promise<Catalog> {
  return loadCatalog(params?.id || '', params?.userId || '');
}