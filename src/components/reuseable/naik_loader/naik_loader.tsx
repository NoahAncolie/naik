import React from "react";
import "./naik_loader.scss";

interface NaikLoaderProps {}

interface NaikLoaderState {}

export class NaikLoader extends React.Component<
  NaikLoaderProps,
  NaikLoaderState
> {
  constructor(props: NaikLoaderProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="naik_loader_container">
          <h1>
            <span className="naik_loader_N">N</span>
            <span className="naik_loader_A">A</span>
            <span className="naik_loader_I">Ï</span>
            <span className="naik_loader_K">K</span>
          </h1>
        </div>
        <div className="naik_loader_colors_1">
          <div className="naik_loader_color_1 naik_loader_color"></div>
          <div className="naik_loader_color_2 naik_loader_color"></div>
          <div className="naik_loader_color_3 naik_loader_color"></div>
          <div className="naik_loader_color_4 naik_loader_color"></div>
        </div>
      </>
    );
  }
}
