import React from 'react'
import "./running_banner.scss"

interface RunningBannerProps {
    running_text: string
}
 
interface RunningBannerState {
    
}
 
export class RunningBanner extends React.Component<RunningBannerProps, RunningBannerState> {
    constructor(props: RunningBannerProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( 
            <div className="running_banner">
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
            {this.props.running_text}G&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
            <h2 className="running_text">
              {this.props.running_text}&nbsp;&#9679;&nbsp;
            </h2>
          </div>
         );
    }
}