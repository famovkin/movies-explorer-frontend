import React, { useState } from "react";

import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Login.css";

function Login({ submitHandler, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(email, password, setEmail, setPassword);
  };

  return (
    <UnauthPage
      title="Рады видеть!"
      text="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
    >
      <form className="login" name="login" onSubmit={onSubmit}>
        <fieldset className="login__inputs">
          <Input
            name="email"
            label="E-mail"
            modifier="unauth"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <Input
            name="password"
            label="Пароль"
            modifier="unauth"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </fieldset>
        <Button className="button_type_blue button_type_submit" type="submit">
          {isLoading ? "Загрузка..." : "Войти"}
        </Button>
      </form>
    </UnauthPage>
  );
}

export default Login;
