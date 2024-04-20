import GiftList from '../models/GiftList';
import { loadGiftList } from './giftListService';

export async function giftListRouteLoader({ params }: any): Promise<GiftList> {
  return loadGiftList(params?.id || '');
}
