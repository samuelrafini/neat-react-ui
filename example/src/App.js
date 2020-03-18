import React, { Component } from 'react'

import {Button} from 'neat-react-ui'

export default class App extends Component {
  render () {
    return (
      <div>
        <Button variant="raised" className="button" neatColor="primary" loading={true}>Text comes here to test</Button>
        <Button shape="full-rounded" variant='flat' iconRight={<img />} iconLeft={<img />} neatColor='primary'>button 1</Button>
        <Button variant='flat' loading={true} color='red'>button 1</Button>
        <Button shape="rounded" iconLeft={<img />} neatColor='success'>button 1</Button>
      </div>
    )
  }
}
