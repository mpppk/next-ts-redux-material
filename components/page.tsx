import Typography from '@material-ui/core/Typography/Typography';
import Link from 'next/link';
import { connect } from 'react-redux';
import AppBar from './AppBar';
import Counter from './counter';
import Drawer from './Drawer';

function Page({ linkTo, NavigateTo, title }) {
  return (
    <div>
      <AppBar />
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <Drawer />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      <Counter />
    </div>
  );
}

export default connect(state => state)(Page);
