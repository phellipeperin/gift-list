import Section from './Section';

interface GiftList {
    id: string;
    name: string;
    description: string;
    // TODO: layout! (pre-defined/free/both?)
    sections: Array<Section>;
}

export default GiftList;