import React from "react";
import "./App.css";
import { Navbar } from "./components/fix/navigation/navbar";
import { NaikloaderFrame } from "./components/reuseable/naik_loader/naik_loader_frame";
import { Home } from "./routes/home/home";

interface AppProps {}

interface AppState {
  displayed: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      displayed: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ displayed: false });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <NaikloaderFrame />
      </div>
    );
  }
}
