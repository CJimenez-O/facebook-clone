import React from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Widget from "./components/widgets";

function App() {
  // const [{user, dispatch}] = useStateValue();
  return (
    <div className="app">
        <div>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
    </div>
  );
}

export default App;
