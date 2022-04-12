import { Card, CardHeader, CardContent, Box, Divider, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from '../components/Iconify';

const TeaImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

export default function TeaContent({ tea, onClickToNextTea }) {
  const handleClickToNextTea = () => {
    onClickToNextTea(tea.id);
  };

  return (
    <Card>
      <Box sx={{ pt: '20%', position: 'relative' }}>
        <TeaImgStyle alt={tea.name} src={tea.image} />
      </Box>

      <CardHeader title={tea.name} />

      <CardContent>{tea.description}</CardContent>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          onClick={handleClickToNextTea}
        >
          Próxima
        </Button>
      </Box>
    </Card>
  );
}
