import { useCallback, useState } from "react";

export function useFormValidation(defaultValues) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    if (name === "username") {
      if (!value) {
        error = "Username is required.";
      } else if (!/^[a-zA-Z0-9]{3,20}$/.test(value)) {
        error =
          "Username should be 3-20 characters and contain only letters and numbers.";
      }
    }

    if (name === "email") {
      if (!value) {
        error = "Email is required.";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      ) {
        error = "Please enter a valid email address.";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Password is required.";
      } else if (value.length < 8) {
        error = "Password must be at least 8 characters long.";
      } else if (!/[A-Z]/.test(value)) {
        error = "Password must include at least one uppercase letter.";
      } else if (!/\d/.test(value)) {
        error = "Password must include at least one number.";
      }
    }

    if (name === "confirmPassword") {
      if (!value) {
        error = "Confirm Password is required.";
      } else if (value !== values.password) {
        error = "Passwords must match.";
      }
    }

    return error;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const error = validateField(name, value);

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

    setIsValid(
      Object.values({ ...errors, [name]: error }).every((err) => !err) &&
        Object.values({ ...values, [name]: value }).every((val) => val)
    );
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
