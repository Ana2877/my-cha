import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
// material
import { Box, Card, Button, Divider, CardHeader, CardContent } from '@mui/material';
import Iconify from '../components/Iconify';
import { TEA_INFORMATION, MAX_TEA_INFO } from '../_mocks_/introduction';

const MINUTE_MS = 120000;

export default function IntroductionContent() {
  const navigate = useNavigate();

  const [infoIndex, setInfoIndex] = useState(0);
  const counterRef = useRef(0);

  const handleNextInfo = (infoIndex) => {
    if (infoIndex < MAX_TEA_INFO) {
      setInfoIndex(infoIndex + 1);
    } else {
      setInfoIndex(0);
      navigate('/escolhendo-cha');
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
      <CardHeader title={TEA_INFORMATION[infoIndex].title} />

      <CardContent>{TEA_INFORMATION[infoIndex].content}</CardContent>

      <Divider />

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
    </Card>
  );
}
