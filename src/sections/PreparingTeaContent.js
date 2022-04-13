import { useState, useRef, useEffect } from 'react';
// material
import { Box, Card, Button, Divider, CardHeader, CardContent } from '@mui/material';
import Iconify from '../components/Iconify';
import { PREPARING_TEA, MAX_PREPARING_TEA } from '../_mocks_/preparingTea';

const MINUTE_MS = 120000;

export default function IntroductionContent() {
  const [infoIndex, setInfoIndex] = useState(0);
  const counterRef = useRef(0);

  const hasNextInfo = () => infoIndex < MAX_PREPARING_TEA;

  const handleNextInfo = (infoIndex) => {
    if (infoIndex < MAX_PREPARING_TEA) {
      setInfoIndex(infoIndex + 1);
    } else {
      setInfoIndex(infoIndex);
    }
  };

  const onNextInfo = () => {
    handleNextInfo(counterRef.current);
  };

  useEffect(() => {
    counterRef.current = infoIndex;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextInfo(counterRef.current);
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader title={PREPARING_TEA[infoIndex].title} />

      <CardContent>{PREPARING_TEA[infoIndex].content}</CardContent>

      <Divider />

      {hasNextInfo() && (
        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button
            to="#"
            size="small"
            color="inherit"
            endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            onClick={onNextInfo}
          >
            Próxima
          </Button>
        </Box>
      )}
    </Card>
  );
}
