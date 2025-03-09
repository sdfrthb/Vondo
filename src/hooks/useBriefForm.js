import { useState } from "react";

export const useBriefForm = (inputValues = {}, validate = (values) => ({}), setSubmit) => {
    const [values, setValues] = useState(inputValues);
    const [errors, setErrors] = useState({});

    const handleChange = event => {
      const { name, value, checked } = event.target;
      setValues({ ...values, [name]: name === 'checkbox' ? checked : value });
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors({});
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // emailjs.send('service_nu7oior', 'template_kxlyty8', values, 'dIvAap2Hlv-UHSsvX')
            // .then((response) => {
            //     console.log('SUCCESS!', response.status, response.text);

            // }, (err) => {
            //     console.error('FAILED...', err);
            // });
            console.log(values)
            setSubmit(true)
        }
        else {
          const firstErrorField = document.querySelector('.text_color_error');
          if (firstErrorField) {
              firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
      }
  }

    return { values, setValues, errors, handleChange, handleSubmit };
};
