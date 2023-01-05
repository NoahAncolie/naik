import * as React from "react";
import { NaikLoader } from "./naik_loader";

interface NaikloaderFrameProps {
}

interface NaikloaderFrameState {
  displayed: boolean;
}

export class NaikloaderFrame extends React.Component<
  NaikloaderFrameProps,
  NaikloaderFrameState
> {
  constructor(props: NaikloaderFrameProps) {
    super(props);
    this.state = {
      displayed: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({displayed: false})
    }, 2500)
  }

  render() {
    return (
      <div
        className="naik_loader_frame"
        style={{
          display: this.state.displayed ? "block" : "none",
        }}
      >
        <NaikLoader />
      </div>
    );
  }
}
