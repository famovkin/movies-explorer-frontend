import { useState } from "react";

export const useCustomValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = (name, value) => {
    switch (name) {
      case "film-query":
        if (value.length === 0) {
          setErrors({ ...errors, [name]: "Запрос не может быть пустым" });
          setIsFormValid(false);
        } else if (!new RegExp(/^[а-яА-ЯёЁa-zA-Z]+$/).test(value)) {
          setErrors({ ...errors, [name]: "Нужно ввести ключевое слово" });
          setIsFormValid(false);
        } else {
          setIsFormValid(true);
          setErrors({});
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    setValues,
    errors,
    handleChange,
    isFormValid,
  };
}
