import GiftList from '../models/GiftList';

export async function loadGiftList(id: string): Promise<GiftList> {
  console.log(id);
  return {} as GiftList; // TODO
}
