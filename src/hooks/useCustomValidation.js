import { useState } from "react";
import validator from "validator";

import { deleteKeyFromObj } from "../utils/deleteKeyFromObj";

export const UseCustomValidation = (currentName, currentEmail) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const setRequiredError = (name) => {
    setErrors({ ...errors, [name]: "Это обязательное поле" });
  };

  const validate = (name, value) => {
    switch (name) {
      case "film-query":
        if (value.length === 0 || value.length === undefined) {
          setErrors({ ...errors, [name]: "Запрос не может быть пустым" });
        } else if (!new RegExp(/^[а-яА-ЯёЁa-zA-Z]+$/).test(value)) {
          setErrors({ ...errors, [name]: "Нужно ввести ключевое слово" });
        } else {
          const newErrors = deleteKeyFromObj(errors, name);
          setErrors(newErrors);
        }
        break;
      case "name":
        // сравниванием значение из инпута и значение их хранилища
        if (value === currentName) {
          // не отображаем ошибку, а просто отключаем кнопку, поэтому пустая строка
          setErrors({ ...errors, [name]: "" })
        } else if (value.length === 0) {
          setRequiredError(name);
        } else if (value.length < 2) {
          setErrors({
            ...errors,
            [name]: "Минимальное количество символов — 2",
          });
        } else if (value.length >= 30) {
          setErrors({
            ...errors,
            [name]: "Максимальное количество символов — 30",
          });
        }
        else if (!new RegExp(/^[а-яА-ЯёЁa-zA-Z\s/-]+$/).test(value)) {
          setErrors({
            ...errors,
            [name]: "Используйте буквы, дефис или пробел",
          });
        } else {
          const newErrors = deleteKeyFromObj(errors, name);
          setErrors(newErrors);
        }
        break;
      case "email":
        if (value === currentEmail) {
          setErrors({ ...errors, [name]: "" })
        } else if (value.length === 0) {
          setRequiredError(name);
        } else if (!validator.isEmail(value)) {
          setErrors({
            ...errors,
            [name]: "Некорректный адрес электронной почты",
          });
        } else {
          const newObjErrors = deleteKeyFromObj(errors, name);
          setErrors(newObjErrors);
        }
        break;
      case "password":
        if (value.length === 0) {
          setRequiredError(name);
        } else if (value.length < 8) {
          setErrors({
            ...errors,
            [name]: "Минимальная длина пароля — 8 символов",
          });
        } else {
          const newObj = deleteKeyFromObj(errors, name);
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    validate(name, value);
  };

  return {
    values,
    errors,
    handleChange,
    setValues,
    isFormValid,
    setIsFormValid,
  };
};
