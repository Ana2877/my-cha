import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Container, styled, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import Page from '../components/Page';
import TeaList from '../sections/TeaList';
import TeaContent from '../sections/TeaContent';
import TEAS from '../_mocks_/teaList';
// import Iconify from '../components/Iconify';

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
  const navigate = useNavigate();
  // const [filterName, setFilterName] = useState('');

  const [openCardId, setOpenCardId] = useState(0);
  const counterRef = useRef(0);

  const hasOpenCard = () => openCardId > 0;

  const onOpenCardId = (id) => {
    setOpenCardId(id);
  };

  const onCloseTea = () => {
    setOpenCardId(0);
  };

  const MINUTE_MS = 5000;

  useEffect(() => {
    counterRef.current = openCardId;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      onClickToNextTea(counterRef.current);
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  // const handleFilterByName = (event) => {
  //   setFilterName(event.target.value);
  // };

  const onClickToNextTea = (id) => {
    if (id < TEAS.length) {
      setOpenCardId(id + 1);
    } else {
      setOpenCardId(0);
      navigate('/dashboard/fazendo-cha');
    }
  };

  const getOpenTea = () => TEAS.find((element) => element.id === openCardId);

  return (
    <Page title="Dashboard: SearchTea | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Lista de Chás
        </Typography>

        {/* <div>
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
        </div> */}
        <br />
        {hasOpenCard() ? (
          <div>
            <TeaContent
              tea={getOpenTea()}
              onClickToNextTea={onClickToNextTea}
              onCloseTea={onCloseTea}
            />
          </div>
        ) : (
          <div>
            <TeaList teas={TEAS} onOpenCardId={onOpenCardId} />
          </div>
        )}
      </Container>
    </Page>
  );
}
