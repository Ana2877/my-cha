import { Box, Container, Typography } from '@mui/material';
import IntroductionContent from '../sections/IntroductionContent';
import Page from '../components/Page';

export default function Introduction() {
  return (
    <Page title="Introduction | Minimal-UI">
      <Container>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Introdução</Typography>
        </Box>
        <IntroductionContent />
      </Container>
    </Page>
  );
}
