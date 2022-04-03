import { useEffect } from "react";

export const UseCheckFormValidity = (values, errors, amountInputs, setIsFormValid) => {
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      Object.values(values).length === amountInputs
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [errors, setIsFormValid, values, amountInputs]);
}
