/**
 * @class ExampleComponent
 */

import * as React from "react";
import { Button } from "./components/button";
// import "./styles/normalization.scss";
import "./styles/variables.scss";
import "./styles/index.scss";
import "./components/button/button.scss";
import "./components/loading/loading.scss";
import { DotsLoading } from "./components/loading";
// import "./styles/base.scss";
// import "./styles/animation.scss";
export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      <>
        <Button onClick={() => console.log("test")} neatColor='danger'>button 1</Button>
        <Button onClick={() => console.log("test")} neatColor='dark'>button 1</Button>
        <Button onClick={() => console.log("test")} disabled neatColor='dark'>button 1</Button>
        <Button onClick={() => console.log("test")} neatColor='primary'>button 1</Button>
        <DotsLoading/>
      </>
    );
  }
}
