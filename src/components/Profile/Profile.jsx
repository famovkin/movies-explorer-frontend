import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";
import currentUserContext from "../../context/currentUserContext";
import "./Profile.css";

function Profile({ setIsLoggedIn }) {
  const {currentUser, setCurrentUser} = useContext(currentUserContext);
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    history.push("/signin");
    setCurrentUser({
      name: "",
      email: "",
    })
  };

  return (
    <section className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form">
          <fieldset className="profile__inputs">
            <Input
              name="name"
              label="Имя"
              modifier="profile"
              type="text"
              required
            />
            <Input
              name="email"
              label="E-mail"
              modifier="profile"
              type="email"
              required
            />
          </fieldset>
          <div className="profile__buttons">
            <Button className="button_type_profile" type="submit">
              Редактировать
            </Button>
            <Button
              className="button_type_profile button_type_red-text"
              handler={signOut}
            >
              Выйти из аккаунта
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
