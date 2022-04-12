import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import TeaCard from './TeaCard';

TeaList.propTypes = {
  teas: PropTypes.array,
  onOpenCardId: PropTypes.func
};

export default function TeaList({ teas, onOpenCardId, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {teas.map((tea) => (
        <Grid key={tea.id} item xs={12} sm={6} md={3}>
          <TeaCard tea={tea} onOpenCardId={onOpenCardId} />
        </Grid>
      ))}
    </Grid>
  );
}
