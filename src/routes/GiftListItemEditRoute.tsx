import { useLoaderData } from 'react-router-dom';
import GiftList from '../model/GiftList';

function GiftListItemEditRoute() {
    const list: GiftList = useLoaderData() as GiftList;

    return (
    <div>
      Gift List Item Edit
    </div>
  );
}

export default GiftListItemEditRoute;