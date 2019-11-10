import Button from '@material-ui/core/Button';
import Link from 'next/link';
import React from 'react';

// tslint:disable-next-line variable-name
const LoginButton: React.FunctionComponent = () => {
  return (
    <Link href={'/login'}>
      <Button color="inherit">Login</Button>
    </Link>
  );
};

export default LoginButton;
