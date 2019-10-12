/**
 * @class ExampleComponent
 */

import * as React from "react";
import { Button } from "./components/button";
import "./styles/index.scss";
import { Input } from "./components/input";

export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      <>
        <Button
          textLabel="button"
          onClick={() => console.log("test")}
          NColor='primary'
        >
          <img ref="" />
        </Button>
        <Input className="input" type="text" name="InputName" />
      </>
    );
  }
}
