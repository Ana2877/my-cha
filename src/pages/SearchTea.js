import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import TeaList from '../sections/TeaList';
import TeaContent from '../sections/TeaContent';
import TEAS from '../_mocks_/teaList';

const MINUTE_MS = 120000;

export default function SearchTea() {
  const navigate = useNavigate();

  const [openCardId, setOpenCardId] = useState(0);
  const counterRef = useRef(0);

  const hasOpenCard = () => openCardId > 0;

  const onOpenCardId = (id) => {
    setOpenCardId(id);
  };

  const onCloseTea = () => {
    setOpenCardId(0);
  };

  useEffect(() => {
    counterRef.current = openCardId;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      onClickToNextTea(counterRef.current);
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  const onClickToNextTea = (id) => {
    if (id < TEAS.length) {
      setOpenCardId(id + 1);
    } else {
      setOpenCardId(0);
      navigate('/fazendo-cha');
    }
  };

  const getOpenTea = () => TEAS.find((element) => element.id === openCardId);

  return (
    <Page title="MyCha: SearchTea">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Lista de Chás
        </Typography>
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
