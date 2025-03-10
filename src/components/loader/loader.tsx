import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_loader.scss";

export default class Loader extends PureComponent<ILoaderProps> {

  public render() {
    const {active, ...props} = this.props;

    if (!active) {
      return null;
    }

    return (
      <div className="q-loader" {...props}>
        <div className="q-loading-animation"/>
      </div>
    );
  }
}

interface ILoaderProps extends IDiv {
  active: boolean;
  type?: string;
}
