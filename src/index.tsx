/**
 * @class ExampleComponent
 */

import * as React from "react";
import { Button } from "./components/button";
// import "./styles/normalization.scss";
// import "./styles/variables.scss";
import "./styles/index.scss";
// import "./components/button/button.scss";
// import "./components/loading/loading.scss";
// import "./styles/base.scss";
// import "./styles/animation.scss";
export type Props = { text: string };

const ExampleComponent: React.FC<Props> = () => {
  const [loading, setLoading] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);

  return (
    <>
      <Button loading={loading} onClick={() => setLoading(true)} neatColor='danger'>button 1</Button>
      <Button onClick={() => setLoading(false)} neatColor='dark'>button 1</Button>
      <Button onClick={() => console.log("test")} disabled neatColor='dark'>button 1</Button>
      <Button onClick={() => setLoading2(false)} neatColor='primary'>button 1</Button>
      <Button loading={loading2} onClick={() => setLoading2(true)} color='pink'>button 1</Button>
    </>
  );
}

export default ExampleComponent