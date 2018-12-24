import Link from 'next/link';
import { connect } from 'react-redux';
import Counter from './counter';
function Page({ linkTo, NavigateTo, title }) {
  return (
    <div>
      <h1> {title} </h1>
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
