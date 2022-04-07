import React, { useEffect } from "react";

import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { UseCustomValidation } from "../../hooks/UseCustomValidation";
import { UseCheckFormValidity } from "../../hooks/UseCheckFormValidity";
import { countInputs } from "../../utils/countInputs";
import "./Login.css";

const Login = ({ submitHandler, isLoading, message, setMessage }) => {
  const { values, errors, handleChange, isFormValid, setIsFormValid } =
    UseCustomValidation();
  const amountInputs = countInputs(".input");

  UseCheckFormValidity(values, errors, amountInputs, setIsFormValid);

  useEffect(() => setMessage(""), [setMessage]);

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(values["email"], values["password"]);
  };

  return (
    <UnauthPage
      title="Рады видеть!"
      text="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
    >
      <form className="login" name="login" onSubmit={onSubmit} noValidate>
        <fieldset className="login__inputs">
          <Input
            name="email"
            label="E-mail"
            modifier="unauth"
            value={values["email"] || ""}
            error={errors["email"]}
            onChange={handleChange}
            type="email"
            autoComplete="off"
            disabled={isLoading}
          />
          <Input
            name="password"
            label="Пароль"
            modifier="unauth"
            value={values["password"] || ""}
            error={errors["password"]}
            onChange={handleChange}
            type="password"
            autoComplete="off"
            disabled={isLoading}
          />
        </fieldset>
        <p
          className={`unauth-page__message ${
            message ? "unauth-page__message_type_fail" : ""
          }`}
        >
          {message}
        </p>
        <Button
          className={`button_type_blue button_type_submit ${
            (!isFormValid || isLoading) && "button_type_disabled"
          }`}
          type="submit"
          isFormValid={isFormValid}
          isLoading={isLoading}
        >
          {isLoading ? "Загрузка..." : "Войти"}
        </Button>
      </form>
    </UnauthPage>
  );
};

export default Login;
