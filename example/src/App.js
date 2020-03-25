import React, { Component } from 'react'

import {Button, Input} from 'neat-react-ui';

export default class App extends Component {
  render () {
    return (
      <div>
        <Button variant="raised" className="button" neatColor="blue">Text comes here to test</Button>
        <Button shape="full-rounded" variant='flat' iconRight={<img />} iconLeft={<img />} color='red'>button 1</Button>
        <Button shape="full-rounded" variant='flat' iconRight={<img />} iconLeft={<img />} loading neatColor='danger'>button 1</Button>
        <Button fontSize="medium" variant='outlined' color='red'>button 1</Button>
        <Button fontSize="x-small" shape="rounded" iconLeft={<img />} neatColor='success'>button 1</Button>
        <Input placeholder="name" label="name" name="name" />
      </div>
    )
  }
}
