import { useState } from "react";

export const useBriefForm = (inputValues = {}, validate = (values) => ({}), setSubmit) => {
    const [values, setValues] = useState(inputValues);
    const [errors, setErrors] = useState({});

    const handleChange = event => {
      const { name, value, checked, files } = event.target;
      if (name === 'file') {
        setValues({ ...values, [name]: files[0] });
    } else {
      setValues({ ...values, [name]: name === 'checkbox' ? checked : value });
    }
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
            setTimeout(() => {
              document.querySelector('body').scrollIntoView({ behavior: 'smooth'});
            }, 400);

        }
        else {
          setTimeout(() => {
            const firstErrorField = document.querySelector('.text_color_error');
          console.log(firstErrorField, 'er')
          if (firstErrorField) {
              firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center'});
          }
          }, 50);

      }
  }

    return { values, setValues, errors, handleChange, handleSubmit };
};
