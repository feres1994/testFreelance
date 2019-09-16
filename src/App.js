import React from "react";
import { Route } from "react-router-dom";
import Header from "./shared/header/header";
import Hero from "./components/hero/hero";
import Sidebar from "./shared/sidebar/sidebar";
import MainContainer from "./components/mainHomeContainer";
import NewsContainer from "./components/news";
import DemandsContainer from "./components/demands";
import SupportContainer from "./components/supports";
import ServicesContainer from "./components/services";
import "./App.css";

class App extends React.Component {
  state = {
    sideBarWidth: 0
  };

  toggleSideBar = () => {
    if (this.state.sideBarWidth === 0) {
      this.setState({
        sideBarWidth: 180
      });
    } else {
      this.setState({
        sideBarWidth: 0
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Header toggleSide={this.toggleSideBar} />
        <Hero />
        <Sidebar sideWidth={this.state.sideBarWidth} />
        <>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/news" component={NewsContainer} />
          <Route exact path="/supports" component={SupportContainer} />
          <Route exact path="/demandes" component={DemandsContainer} />
          <Route exact path="/services" component={ServicesContainer} />
        </>
      </div>
    );
  }
}

export default App;
