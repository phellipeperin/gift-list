import GiftList from '../models/Catalog';

export async function loadGiftList(id: string): Promise<GiftList> {
  console.log(id);
  return {} as GiftList; // TODO
}
