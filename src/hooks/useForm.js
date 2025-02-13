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
            console.log(1)
            setSubmit(true)

        }
        else {
          setTimeout(() => {
            setErrors({});
          }, 3000);
    };}

    return { values, setValues, errors, handleChange, handleSubmit };
};
