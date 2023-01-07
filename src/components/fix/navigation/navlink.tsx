import * as React from "react";

interface NavlinkProps {
  link_name: string;
  dot_position: (event: any) => void;
  hide_dot: () => void;
  expand_dot: () => void;
}

interface NavlinkState {}

export class Navlink extends React.Component<NavlinkProps, NavlinkState> {
  constructor(props: NavlinkProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <a
        href={`#${this.props.link_name.toLowerCase().split(' ')[0]}`}
        className="navbar_link"
        onClick={() => {
          this.props.expand_dot();
        }}
      >
        <li
          className="navbar_list_link"
          onMouseEnter={(event) => {
            this.props.dot_position(event);
          }}
          onMouseLeave={() => {
            this.props.hide_dot();
          }}
        >
          {this.props.link_name}
        </li>
      </a>
    );
  }
}
