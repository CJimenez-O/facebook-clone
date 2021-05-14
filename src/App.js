import React from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Feed from './components/feed'

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app_body">
        <Sidebar />
        <Feed /> 
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
