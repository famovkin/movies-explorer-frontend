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
          <Input label="Имя" type="name" modifier="profile" />
          <Input label="E-mail" type="email" modifier="profile" />
        </form>
        <div className="profile__buttons">
          <Button className="button_type_profile">Редактировать</Button>
          <Button className="button_type_profile button_type_red-text">
            Выйти из аккаунта
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
