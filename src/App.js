import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from "webfontloader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Components/Navigation/NavBar";

library.add({ faSearch, faGraduationCap });

WebFont.load({
  google: {
    families: ["Pacifico"]
  }
});

const App = () => {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
};

export default App;
