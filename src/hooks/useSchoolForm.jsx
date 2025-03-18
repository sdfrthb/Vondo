import emailjs from "emailjs-com";
import { useState } from "react";

export const useSchoolForm = (
  inputValues = {},
  validate = (values) => ({}),
  setSubmit
) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setValues({ ...values, [name]: name === "checkbox" ? checked : value });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (event.target.classList.value.includes('Questions')) {
        emailjs
        .send(
          "service_ei56ap3",
          "template_ugvp17n",
          values,
          "FExcyF1hPE5QBTCr8"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.error("FAILED...", err);
          }
        );
      }
      else {
        emailjs
        .send(
          "service_ei56ap3",
          "template_2ojh3j1",
          values,
          "FExcyF1hPE5QBTCr8"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.error("FAILED...", err);
          }
        );
      }

      setSubmit(true);
    }
  };

  return { values, setValues, errors, handleChange, handleSubmit };
};
