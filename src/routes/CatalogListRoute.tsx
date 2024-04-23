import { Stack, Button } from '@mui/joy';

import PageTitle from '../components/system/PageTitle';
import CatalogList from  '../components/catalog/CatalogList';

function CatalogListRoute() {
  return (
    <Stack
      spacing={2}
      sx={{
        padding: 4,
      }}
    >
      <PageTitle title="Your Gift Lists" />
      <CatalogList list={[]} />
      <Button
        variant="outlined"
        sx={{
          minHeight: 64,
          width: '100%',
          fontSize: 16,
          textTransform: 'uppercase',
        }}
      >
        Create a Gift List
      </Button>
    </Stack>
  );
}

export default CatalogListRoute;
