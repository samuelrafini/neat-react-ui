/**
 * @class ExampleComponent
 */

import * as React from "react";
import { Button } from "./components/button";
import "./components/button/button.scss";
import { Input } from "./components/input";

export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      <>
        <Button
          className="btn"
          textLabel="button"
          onClick={() => console.log("test")}
        >
          <img ref="" />
        </Button>
        <Input className="input" type="text" name="InputName" />
      </>
    );
  }
}
