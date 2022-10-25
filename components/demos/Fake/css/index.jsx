import React from 'react';
import './styles.css';

const Button = React.forwardRef((props, forwardedRef) => (
  <button className="button violet" {...props} ref={forwardedRef} />
));

const Demo = () => <Button>Edit profile</Button>;

export default Demo;
