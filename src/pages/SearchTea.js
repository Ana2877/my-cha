import { useState } from 'react';
// material
import { Container, styled, Typography, OutlinedInput, InputAdornment } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductList } from '../sections/@dashboard/products';
//
import PRODUCTS from '../_mocks_/products';
import Iconify from '../components/Iconify';

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 600,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 600, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

export default function SearchTea() {
  const [filterName, setFilterName] = useState('');

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <Page title="Dashboard: SearchTea | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Lista de Chás
        </Typography>

        <div>
          <SearchStyle
            value={filterName}
            onChange={handleFilterByName}
            placeholder="Procurar chá..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
          />
        </div>
        <br />
        <div>
          <ProductList products={PRODUCTS} />
        </div>
      </Container>
    </Page>
  );
}
