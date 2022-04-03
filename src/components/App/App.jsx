import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

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
import currentUserContext from "../../context/currentUserContext";
import { mainApi } from "../../utils/MainApi";
import * as auth from "../../utils/auth";

function App() {
  const [onSavedPage, setOnSavedPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [savedMovies, setSavedMovies] = useState([])
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      history.push("/movies");
    }
  }, [token, isLoggedIn, history]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getCurrentUserInfo(token)
        .then(([response]) => {
          setCurrentUser(response);
        })
        .catch((e) => console.log(e));
    }
  }, [token, isLoggedIn]);

  function registerUser(name, email, password) {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          loginUser(email, password);
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

  function loginUser(email, password) {
    setIsLoading(true);
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((e) => {
        console.log(e);
        setIsLoggedIn(false);
      })
      .finally(() => setIsLoading(false));
  }

  function updateUserInfo(userDataFromForm) {
    setIsLoading(true);
    mainApi
      .editCurrentUserInfo(userDataFromForm, token)
      .then((userDataUpdated) => {
        setCurrentUser({
          name: userDataUpdated.name,
          email: userDataUpdated.email,
        });
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }

  return (
    <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <savedPageContext.Provider value={{ onSavedPage, setOnSavedPage }}>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute
              component={Movies}
              isLoggedIn={isLoggedIn}
              exact
              path="/movies"
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
            <ProtectedRoute
              component={SavedMovies}
              isLoggedIn={isLoggedIn}
              exact
              path="/saved-movies"
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
            <ProtectedRoute
              component={Profile}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              exact
              path="/profile"
              submitHandler={updateUserInfo}
            />
            <Route path="/signup">
              <Register submitHandler={registerUser} isLoading={isLoading} />
            </Route>
            <Route path="/signin">
              <Login submitHandler={loginUser} isLoading={isLoading} />
            </Route>
            <Route>
              <NotFound path="/404" />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </div>
      </savedPageContext.Provider>
    </currentUserContext.Provider>
  );
}

export default App;
