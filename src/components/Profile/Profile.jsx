import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";
import currentUserContext from "../../context/currentUserContext";
import { useCustomValidation } from "../../hooks/useCustomValidation";
import { useFormValidity } from "../../hooks/useFormValidity";
import { countInputs } from "../../utils/countInputs";
import "./Profile.css";

const Profile = ({
  setIsLoggedIn,
  submitHandler,
  message,
  isLoading,
  messageModifier,
}) => {
  const { currentUser, setCurrentUser } = useContext(currentUserContext);
  // создаем новый объект о пользователе для сравнения с values
  const currentUserData = { name: currentUser.name, email: currentUser.email };
  const {
    values,
    errors,
    setValues,
    handleChange,
    isFormValid,
    setIsFormValid,
  } = useCustomValidation(currentUser.name, currentUser.email);
  const history = useHistory();
  const amountInputs = countInputs(".input");

  useFormValidity(
    values,
    errors,
    amountInputs,
    setIsFormValid,
    currentUserData
  );

  // отображаем текущие данные в инпутах
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
              messageModifier
                ? `profile__error-message_type_${messageModifier}`
                : ""
            }`}
          >
            {message}
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
};

export default Profile;
