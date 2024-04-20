import { useLoaderData } from 'react-router-dom';
import GiftList from '../models/GiftList';

function GiftListItemRoute() {
  const list: GiftList = useLoaderData() as GiftList;

  return <div>Gift List Item</div>;
}

export default GiftListItemRoute;
