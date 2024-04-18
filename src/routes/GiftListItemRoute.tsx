import { useLoaderData } from 'react-router-dom';
import GiftList from '../model/GiftList';

function GiftListItemRoute() {
    const list: GiftList = useLoaderData() as GiftList;

    return (
    <div>
      Gift List Item 
    </div>
  );
}

export default GiftListItemRoute;