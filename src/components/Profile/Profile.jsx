import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";
import currentUserContext from "../../context/currentUserContext";
import { UseCustomValidation } from "../../hooks/UseCustomValidation";
import { UseCheckFormValidity } from "../../hooks/UseCheckFormValidity";
import { countInputs } from "../../utils/countInputs";
import "./Profile.css";

function Profile({ setIsLoggedIn, submitHandler, message, isLoading }) {
  const { currentUser, setCurrentUser } = useContext(currentUserContext);
  const {
    values,
    errors,
    setValues,
    handleChange,
    isFormValid,
    setIsFormValid,
  } = UseCustomValidation();
  const history = useHistory();
  const amountInputs = countInputs(".input");

  UseCheckFormValidity(values, errors, amountInputs, setIsFormValid);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser.name, currentUser.email, setValues]);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("queryData");
    localStorage.removeItem("savedMovies");
    setIsLoggedIn(false);
    history.push("/");
    setCurrentUser({
      name: "",
      email: "",
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    submitHandler({ name: values["name"], email: values["email"] });
  };

  return (
    <section className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form" onSubmit={onSubmitForm} noValidate>
          <fieldset className="profile__inputs">
            <Input
              name="name"
              label="Имя"
              modifier="profile"
              type="text"
              onChange={handleChange}
              value={values["name"] || ""}
              error={errors["name"]}
              autoComplete="off"
              disabled={isLoading}
            />
            <Input
              name="email"
              label="E-mail"
              modifier="profile"
              type="email"
              onChange={handleChange}
              value={values["email"] || ""}
              error={errors["email"]}
              autoComplete="off"
              disabled={isLoading}
            />
          </fieldset>
          <p
            className={`profile__error-message ${
              message.status
                ? `profile__error-message_type_${message.status}`
                : ""
            }`}
          >
            {message.text}
          </p>
          <div className="profile__buttons">
            <Button
              className={`button_type_profile ${
                (!isFormValid || isLoading) && "button_type_disabled"
              }`}
              type="submit"
              isFormValid={isFormValid}
              isLoading={isLoading}
            >
              {isLoading ? "Сохраняем..." : "Редактировать"}
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
