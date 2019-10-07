/**
 * @class ExampleComponent
 */

import * as React from 'react'
import { Button } from './components/button'

export type Props = { text: string }

export default class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      <Button textLabel='button' iconLeft onClick={() => console.log('test')}><img ref=''/></Button>
    )
  }
}
