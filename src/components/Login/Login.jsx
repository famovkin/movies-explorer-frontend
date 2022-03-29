import React from "react";

import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Login.css";

function Login() {
  return (
    <UnauthPage title="Рады видеть!">
      <form className="login" name="login">
        <div className="login__inputs">
          <Input label="E-mail" type="email" modifier="unauth" />
          <Input label="Пароль" type="password" modifier="unauth" />
        </div>
        <Button className="button_type_blue button_type_submit" type="submit">
          Войти
        </Button>
        <p className="login__text">
          Ещё не зарегистрированы?{" "}
          <a className="login__link" href="1">
            Регистрация
          </a>
        </p>
      </form>
    </UnauthPage>
  );
}

export default Login;
