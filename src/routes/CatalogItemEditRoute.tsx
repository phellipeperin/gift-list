import { useLoaderData } from 'react-router-dom';
import Catalog from '../models/Catalog';

function CatalogItemEditRoute() {
  const catalog: Catalog = useLoaderData() as Catalog;
  console.log(catalog);

  return (
    <div>Catalog Item Edit</div>
  );
}

export default CatalogItemEditRoute;
