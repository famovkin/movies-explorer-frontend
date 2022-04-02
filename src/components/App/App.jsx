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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";

function App() {
  const [onSavedPage, setOnSavedPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function registerUser(name, email, password) {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          // автологин
          // setIsSuccessReg(true);
        } else {
          console.log("Что-то пошло не так");
          // setIsSuccessReg(false);
        }
      })
      .catch((e) => {
        console.log(e);
        // setIsSuccessReg(false);
      })
      .finally(() => {
        // setIsInfoToolTipOpen(true);
        setIsLoading(false);
      });
  }

  return (
    <savedPageContext.Provider value={{ onSavedPage, setOnSavedPage }}>
      <div className="app">
        <Switch>
          <ProtectedRoute
            component={Main}
            isLoggedIn={isLoggedIn}
            exact
            path="/"
          />
          <ProtectedRoute
            component={Movies}
            isLoggedIn={isLoggedIn}
            exact
            path="/movies"
          />
          <ProtectedRoute
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            exact
            path="/saved-movies"
          />
          <ProtectedRoute
            component={Profile}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            exact
            path="/profile"
          />
          <Route path="/signup">
            <Register submitHandler={registerUser} isLoading={isLoading} />
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
