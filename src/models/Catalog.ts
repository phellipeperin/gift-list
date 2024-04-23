import Section from './Section';

interface Catalog {
  id: string;
  name: string;
  description: string;
  // TODO: layout! (pre-defined/free/both?)
  sections: Array<Section>;
}

export default Catalog;
