import GiftList from '../model/GiftList';

export async function loadGiftList(id: string): Promise<GiftList> {
    console.log(id);
    return {} as GiftList; // TODO
}