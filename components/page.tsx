import Typography from '@material-ui/core/Typography/Typography';
import Link from 'next/link';
import { connect } from 'react-redux';
import Counter from './counter';
function Page({ linkTo, NavigateTo, title }) {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
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
