import React from "react";
import { Route } from "react-router-dom";

// Pages
import HomePageContainer from "./components/containers/HomePageContainer";

//Layout
import NavBar from "./components/ui/NavBar";

const App = () => (
  <div>
    <NavBar />
    <Route path="/" exact component={HomePageContainer} />
    <Route path="/home" exact component={HomePageContainer} />
    {/* <FooterComponent /> */}
    <div> FOOTER</div>
  </div>
);

export default App;
