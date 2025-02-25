import emailjs from 'emailjs-com';
import { useState } from "react";

export const useForm = (inputValues = {}, validate = (values) => ({}), setSubmit) => {
    const [values, setValues] = useState(inputValues);
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const { name, value, checked} = event.target;
        setValues({ ...values, [name]: name === 'checkbox' ? checked : value });
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            emailjs.send('service_nu7oior', 'template_kxlyty8', values, 'dIvAap2Hlv-UHSsvX')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);

            }, (err) => {
                console.error('FAILED...', err);
            });
            setSubmit(true)
        }
        else {
          setTimeout(() => {
            setErrors({});
          }, 3000);
    };}

    return { values, setValues, errors, handleChange, handleSubmit };
};
