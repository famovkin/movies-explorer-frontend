import React from "react";

import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { UseCustomValidation } from "../../hooks/UseCustomValidation";
import { UseCheckFormValidity } from "../../hooks/UseCheckFormValidity";
import { countInputs } from "../../utils/countInputs";
import "./Login.css";

function Login({ submitHandler, isLoading }) {
  const { values, errors, handleChange, isFormValid, setIsFormValid } =
    UseCustomValidation();
  const amountInputs = countInputs(".input");

  UseCheckFormValidity(values, errors, amountInputs, setIsFormValid);

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
          />
        </fieldset>
        <Button
          className={`button_type_blue button_type_submit ${
            !isFormValid && "button_type_disabled"
          }`}
          type="submit"
          disabled={!isFormValid}
        >
          {isLoading ? "Загрузка..." : "Войти"}
        </Button>
      </form>
    </UnauthPage>
  );
}

export default Login;
