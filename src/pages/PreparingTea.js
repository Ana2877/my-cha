import { Box, Container, Grid, Typography } from '@mui/material';
import PreparingTeaContent from '../sections/PreparingTeaContent';
import Page from '../components/Page';

export default function PreparingTea() {
  return (
    <Page title="Introduction | Minimal-UI">
      <Container>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Fazendo o chá</Typography>
        </Box>
        <Grid item xs={12} md={6} lg={8}>
          <PreparingTeaContent />
        </Grid>
      </Container>
    </Page>
  );
}
