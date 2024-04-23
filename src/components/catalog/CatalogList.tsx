import Catalog from '../../models/Catalog';

import NoResults from  '../system/NoResults';

interface ComponentProps {
  list: Array<Catalog>;
}

function CatalogList({ list }: ComponentProps) {
  return (
    <>
      {list.length ? <></> : <NoResults />}
    </>
  );
}

export default CatalogList;
