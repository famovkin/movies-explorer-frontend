import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import UnauthPage from "../UnauthPage/UnauthPage";
import { UseCustomValidation } from "../../hooks/UseCustomValidation";
import { UseCheckFormValidity } from "../../hooks/UseCheckFormValidity";
import { countInputs } from "../../utils/countInputs";
import "./Register.css";

function Register({ submitHandler, isLoading }) {
  const { values, errors, handleChange, isFormValid, setIsFormValid } =
    UseCustomValidation();
  const amountInputs = countInputs(".input");

  UseCheckFormValidity(values, errors, amountInputs, setIsFormValid);

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(values["name"], values["email"], values["password"]);
  };

  return (
    <UnauthPage
      title="Добро пожаловать!"
      text="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
    >
      <form className="register" name="register" onSubmit={onSubmit} noValidate>
        <fieldset className="register__inputs">
          <Input
            name="name"
            label="Имя"
            modifier="unauth"
            value={values["name"] || ""}
            error={errors["name"]}
            onChange={handleChange}
            type="text"
            autoComplete="off"
          />
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
          {isLoading ? "Загрузка" : "Зарегистрироваться"}
        </Button>
      </form>
    </UnauthPage>
  );
}

export default Register;
