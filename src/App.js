import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Recipe from "./pages/Recipe/Recipe";
import "./App.scss";
import AddRecipePage from "./pages/Add Recipe/AddRecipePage";

function App() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/add-recipe" component={AddRecipePage} />
        </Switch>
      </>
    );
}

export default App;
