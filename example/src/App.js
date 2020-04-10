import React, { useRef, useLayoutEffect, useState } from 'react'
import { Button, Input } from 'neat-react-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('react-dom');
console.log(window.React1);
window.React2 = require('react');
console.log(window.React1 === window.React2);


const App = () => {
  const [state, setState] = useState('');

  const inputRef = useRef();
  const inputRef2 = useRef();

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef])

  return (
    <div>
      <Button
        iconLeft={<FontAwesomeIcon className='' icon={['fab', 'facebook-f']} />}
        variant="raised"
        className="button"
        neatColor="blue"
      >
        Text comes here to test
      </Button>
      <Button shape="full-rounded" variant='flat' iconRight={<img />} iconLeft={<img />} color='red'>button 1</Button>
      <Button shape="full-rounded" variant='flat' iconRight={<img />} iconLeft={<img />} loading neatColor='danger'>button 1</Button>
      <Button fontSize="medium" variant='outlined' color='red'>button 1</Button>
      <Button fontSize="x-small" shape="rounded" iconLeft={<img />} neatColor='success'>butt lon 1</Button>
      <Input required ref={inputRef} placeholder="name" label="name" name="name" onChange={e => setState(e.currentTarget.value)} value={state} />
      <Input required type='email' ref={inputRef2} placeholder="name" label="name" name="name" onChange={e => setState(e.currentTarget.value)} message='insert email' value={state} />
    </div>
  )
}

export default App 