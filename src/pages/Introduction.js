import { Box, Container, Grid, Typography } from '@mui/material';
import IntroductionContent from '../sections/IntroductionContent';
import Page from '../components/Page';

export default function Introduction() {
  return (
    <Page title="Introduction | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Introdução</Typography>
        </Box>
        <Grid item xs={12} md={6} lg={8}>
          <IntroductionContent />
        </Grid>
      </Container>
    </Page>
  );
}
