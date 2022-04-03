import React from "react";

import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Login.css";

function Login() {
  return (
    <UnauthPage
      title="Рады видеть!"
      text="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
    >
      <form className="login" name="login">
        <fieldset className="login__inputs">
          <Input
            name="email"
            label="E-mail"
            modifier="unauth"
            type="email"
            required
          />
          <Input
            name="password"
            label="Пароль"
            modifier="unauth"
            type="password"
            required
          />
        </fieldset>
        <Button className="button_type_blue button_type_submit" type="submit">
          Войти
        </Button>
      </form>
    </UnauthPage>
  );
}

export default Login;
