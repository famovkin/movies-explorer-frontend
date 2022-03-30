import React from "react";

import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
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
            <Button className="button_type_profile button_type_red-text">
              Выйти из аккаунта
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
