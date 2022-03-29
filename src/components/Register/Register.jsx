import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import UnauthPage from "../UnauthPage/UnauthPage";

import "./Register.css";

function Register() {
  return (
    <UnauthPage
      title="Добро пожаловать!"
      text="Уже зарегистрированы?"
      link="#"
      linkText="Войти"
    >
      <form className="register" name="register">
        <div className="register__inputs">
          <Input label="Имя" type="name" modifier="unauth" />
          <Input label="E-mail" type="email" modifier="unauth" />
          <Input
            label="Пароль"
            type="password"
            error="Что-то пошло не так..."
            modifier="unauth"
          />
        </div>
        <Button className="button_type_blue button_type_submit" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </UnauthPage>
  );
}

export default Register;
