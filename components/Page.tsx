import Typography from '@material-ui/core/Typography/Typography';
import { connect } from 'react-redux';
import AppBar from './AppBar';
import Counter from './Counter';

function Page({ title }) {
  return (
    <div>
      <AppBar />
      <Typography variant="h2" gutterBottom={true}>
        {title}
      </Typography>
      <Counter />
    </div>
  );
}

export default connect(state => state)(Page);
