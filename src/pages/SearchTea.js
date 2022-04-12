import { useState } from 'react';
import { Container, styled, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import Page from '../components/Page';
import TeaList from '../sections/TeaList';
import TEAS from '../_mocks_/teaList';
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

  const [openCardId, setOpenCardId] = useState(0);

  const hasOpenCard = () => openCardId > 0;

  const onOpenCardId = (id) => {
    setOpenCardId(id);
  };

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
        {hasOpenCard() ? (
          <div>Olá mundo</div>
        ) : (
          <div>
            <TeaList teas={TEAS} onOpenCardId={onOpenCardId} />
          </div>
        )}
      </Container>
    </Page>
  );
}
