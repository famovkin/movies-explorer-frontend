import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import savedPageContext from "../../context/saved-page-context";

function App() {
  const [onSavedPage, setOnSavedPage] = useState(false);

  return (
    <savedPageContext.Provider value={{ onSavedPage, setOnSavedPage }}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route>
            <NotFound path="/404" />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </div>
    </savedPageContext.Provider>
  );
}

export default App;
