import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const TeaImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

export default function TeaCard({ tea }) {
  const { name, description, image } = tea;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <TeaImgStyle alt={name} src={image} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle1" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle2" noWrap>
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
