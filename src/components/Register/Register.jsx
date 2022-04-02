import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import UnauthPage from "../UnauthPage/UnauthPage";

import "./Register.css";

function Register({ submitHandler, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(name, email, password, setEmail, setPassword, setName);
  };

  return (
    <UnauthPage
      title="Добро пожаловать!"
      text="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
    >
      <form className="register" name="register" onSubmit={onSubmit}>
        <fieldset className="register__inputs">
          <Input
            name="name"
            label="Имя"
            modifier="unauth"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
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
            error="Что-то пошло не так..."
            modifier="unauth"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
        </fieldset>
        <Button className="button_type_blue button_type_submit" type="submit">
          {isLoading ? "Загрузка" : "Зарегистрироваться"}
        </Button>
      </form>
    </UnauthPage>
  );
}

export default Register;
