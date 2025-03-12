import { useState } from "react";


export const useBriefForm = (
  inputValues = {},
  validate = (values) => ({}),
  setSubmit,
  setIsSubmitting

) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, checked, files } = event.target;
    if (name === "file") {
      setValues({ ...values, [name]: files[0] });
    } else {
      setValues({ ...values, [name]: name === "checkbox" ? checked : value });
    }
  };

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    setErrors({});
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("file", values.file);

    setIsSubmitting(true);
    try {
      // Здесь ваша логика отправки формы. Пример задержки:
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setSubmit(true);
    } catch (error) {
      console.error('Ошибка отправки формы', error);
    } finally {
      setIsSubmitting(false);
    }
      // try {
      //   const response = await fetch("https://vondo.ru/upload.php", {
      //     method: "POST",
      //     body: formData,
      //   });

      //   if (!response.ok) {
      //     throw new Error("Ошибка при загрузке файла");
      //   }

      //   const fileURL = await response.text();

      //   await emailjs.send(
      //     "service_nu7oior",
      //     "template_a04r01q",
      //     { ...values, fileURL },
      //     "dIvAap2Hlv-UHSsvX"
      //   );

      //   setSubmit(true);

      //   setTimeout(() => {
      //     document.querySelector("body").scrollIntoView({ behavior: "smooth" });
      //   }, 400);
      // } catch (err) {
      //   console.error("Ошибка отправки:", err);
      // }
    } else {
      setTimeout(() => {
        const firstErrorField = document.querySelector(".text_color_error");
        if (firstErrorField) {
          firstErrorField.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 50);
    }
  };

  return { values, setValues, errors, handleChange, handleSubmit };
};
