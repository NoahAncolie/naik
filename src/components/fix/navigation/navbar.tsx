import React, { useRef } from "react";
import "./navbar.scss";
import { Navlink } from "./navlink";

interface NavbarProps {}

interface NavbarState {
  dot_left: number;
  dot_hide: boolean;
  navbar_title_visible: boolean;
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      dot_left: window.innerWidth / 2,
      dot_hide: true,
      navbar_title_visible: true,
    };
    this.dotPosition = this.dotPosition.bind(this);
    this.hideDot = this.hideDot.bind(this);
    this.expandDot = this.expandDot.bind(this);
    this.callbackFunction = this.callbackFunction.bind(this);
  }

  componentDidMount() {
    const intersectionObserver = new IntersectionObserver(
      this.callbackFunction,
      { threshold: 0 }
    );
    intersectionObserver.observe(document.getElementById("navbar_title")!);
  }

  callbackFunction(entries: any) {
    const [entry] = entries;
    this.setState({ navbar_title_visible: entry.isIntersecting });
  }

  dotPosition(event: any) {
    this.setState({ dot_hide: false });
    const link_info = event.target.getBoundingClientRect();
    this.setState({ dot_left: link_info.left + link_info.width / 2 });
  }

  hideDot() {
    this.setState({ dot_hide: true });
  }

  expandDot() {
    const navbar_dot = document.getElementById("navbar_dot");
    navbar_dot?.classList.toggle("expand_dot");
    setTimeout(() => {
      navbar_dot?.classList.toggle("expand_dot");
    }, 250);
  }

  render() {
    return (
      <header>
        <h2 className="navbar_title" id="navbar_title">
          NAÏK
        </h2>
        {this.state.navbar_title_visible ? (
          <></>
        ) : (
          <>
            <h2 className="navbar_logo_lg">
              <div className="naik_logo_N">N</div>
              <div className="naik_logo_A">A</div>
              <div className="naik_logo_I">Ï</div>
              <div className="naik_logo_K">K</div>
            </h2>
            <h2 className="navbar_logo_sm">NAÏK</h2>
          </>
        )}
        <nav>
          <div className="navbar_container">
            <ul className="navbar_list">
              <Navlink
                link_name="Novelty"
                dot_position={this.dotPosition}
                hide_dot={this.hideDot}
                expand_dot={this.expandDot}
              />
              <Navlink
                link_name="All products"
                dot_position={this.dotPosition}
                hide_dot={this.hideDot}
                expand_dot={this.expandDot}
              />
              <Navlink
                link_name="Special offers"
                dot_position={this.dotPosition}
                hide_dot={this.hideDot}
                expand_dot={this.expandDot}
              />
              <div
                className="navbar_dot"
                id="navbar_dot"
                style={{
                  left: this.state.dot_left,
                  display: this.state.dot_hide ? "none" : "block",
                }}
              ></div>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
