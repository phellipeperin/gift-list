import { useLoaderData } from 'react-router-dom';
import Catalog from '../models/Catalog';

function CatalogItemRoute() {
  const catalog: Catalog = useLoaderData() as Catalog;

  return <div>Catalog Item</div>;
}

export default CatalogItemRoute;
