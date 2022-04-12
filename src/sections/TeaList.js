import { Grid } from '@mui/material';
import TeaCard from './TeaCard';

export default function TeaList({ teas, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {teas.map((tea) => (
        <Grid key={tea.id} item xs={12} sm={6} md={3}>
          <TeaCard tea={tea} />
        </Grid>
      ))}
    </Grid>
  );
}
