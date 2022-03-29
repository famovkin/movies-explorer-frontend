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
      link="#"
      linkText="Регистрация"
    >
      <form className="login" name="login">
        <div className="login__inputs">
          <Input label="E-mail" type="email" modifier="unauth" />
          <Input label="Пароль" type="password" modifier="unauth" />
        </div>
        <Button className="button_type_blue button_type_submit" type="submit">
          Войти
        </Button>
      </form>
    </UnauthPage>
  );
}

export default Login;
