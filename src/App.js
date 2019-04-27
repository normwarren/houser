import React, { Component } from "react";
import Header from "./Components/Header/Header";
import { HashRouter } from "react-router-dom";

import router from "./routes";

class App extends Component {
  render() {
    return (
      // wrapping HashRouter around everything
      <HashRouter>
        <div>
          <Header />
          {router}
        </div>
      </HashRouter>
    );
  }
}

export default App;
