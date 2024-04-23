import GiftList from '../models/Catalog';
import { loadGiftList } from './giftListService';

export async function giftListRouteLoader({ params }: any): Promise<GiftList> {
  return loadGiftList(params?.id || '');
}
