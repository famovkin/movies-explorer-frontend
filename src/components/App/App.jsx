import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import ErrorPopup from "../ЕrrorPopup/ErrorPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import currentUserContext from "../../context/currentUserContext";
import { mainApi } from "../../utils/MainApi";
import { DEFAULT_ERROR_MESSAGE } from "../../utils/constants";
import { NOTIFICATION_DURATION } from "../../utils/constants";
import * as auth from "../../utils/auth";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [savedMovies, setSavedMovies] = useState([]);
  const [profileMessage, setProfileMessage] = useState("");
  const [profileMessageModifier, setProfileMessageModifier] = useState(false);
  const [savedMoviesMessage, setSavedMoviesMessage] = useState("");
  const [unauthPageMessage, setUnauthPageMessage] = useState("");
  const [popupError, setPopupError] = useState("");
  const [popupErrorStatus, setPopupErrorStatus] = useState(false);
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    if (token && !popupErrorStatus) {
      setIsLoggedIn(true);
      history.push("/movies");
    }
  }, [token, isLoggedIn, history]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getCurrentUserInfo(token)
        .then(([response]) => setCurrentUser(response))
        .catch((e) => {
          showPopupError(e.message);
          setIsLoggedIn(false);
          history.push("/signin");
        });
    }
  }, [token, isLoggedIn, history]);

  useEffect(() => {
    if (isLoggedIn && !popupErrorStatus) {
      mainApi
        .getSavedMovies(token)
        .then((moviesData) => {
          const ownSavedMovies = moviesData.filter(
            (movie) => movie.owner === currentUser._id
          );
          localStorage.setItem("savedMovies", JSON.stringify(ownSavedMovies));
          setSavedMovies(ownSavedMovies);
          setSavedMoviesMessage("");
        })
        .catch((e) => {
          setSavedMoviesMessage(DEFAULT_ERROR_MESSAGE);
          console.log(e);
        });
    }
  }, [currentUser._id, setSavedMovies, token, popupErrorStatus]);

  const showProfileMessage = (text, modifier) => {
    setProfileMessage(text);
    setProfileMessageModifier(modifier);
    setTimeout(() => setProfileMessageModifier(""), NOTIFICATION_DURATION);
  }

  const showPopupError = (text = "Что-то пошло не так") => {
    setPopupError(text);
    setPopupErrorStatus(true);
    setTimeout(() => setPopupErrorStatus(false), NOTIFICATION_DURATION);
  }

  const registerUser = (name, email, password) => {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          loginUser(email, password);
          setUnauthPageMessage("");
        }
      })
      .catch((e) => e.json())
      .then((e) => {
        if (e?.message) {
          setUnauthPageMessage(e.message);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password) => {
    setIsLoading(true);
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          history.push("/movies");
          setUnauthPageMessage("");
        }
      })
      .catch((e) => e.json())
      .then((e) => {
        if (e?.message) {
          setUnauthPageMessage(e.message);
        }
        setIsLoggedIn(false);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }

  const updateUserInfo = (userDataFromForm) => {
    setIsLoading(true);
    mainApi
      .editCurrentUserInfo(userDataFromForm, token)
      .then((userDataUpdated) => {
        setCurrentUser({
          name: userDataUpdated.name,
          email: userDataUpdated.email,
        });
        showProfileMessage("Изменения сохранены", "success");
      })
      .catch((e) => showProfileMessage(e.message, "fail"))
      .finally(() => setIsLoading(false));
  }
  return (
    <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="app">
        <ErrorPopup text={popupError} isVisible={popupErrorStatus} />
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
            cardErrorHandler={showPopupError}
          />
          <ProtectedRoute
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            exact
            path="/saved-movies"
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            message={savedMoviesMessage}
            cardErrorHandler={showPopupError}
          />
          <ProtectedRoute
            component={Profile}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            exact
            path="/profile"
            submitHandler={updateUserInfo}
            isLoading={isLoading}
            message={profileMessage}
            messageModifier={profileMessageModifier}
          />
          <Route path="/signup">
            <Register
              submitHandler={registerUser}
              isLoading={isLoading}
              message={unauthPageMessage}
              setMessage={setUnauthPageMessage}
            />
          </Route>
          <Route path="/signin">
            <Login
              submitHandler={loginUser}
              isLoading={isLoading}
              message={unauthPageMessage}
              setMessage={setUnauthPageMessage}
            />
          </Route>
          <Route>
            <NotFound path="/404" />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </div>
    </currentUserContext.Provider>
  );
};

export default App;
