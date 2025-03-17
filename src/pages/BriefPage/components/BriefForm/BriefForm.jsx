import BriefInput from "../BriefInput/BriefInput";
import SwitchBlock from "../SwitcherBlock/SwitchBlock";
import policy from "../../../../images/policy.pdf";
import styles from "./BriefForm.module.css";
import RadioButton from "../RadioButton/RadioButton";
import FileInput from "../FileInput/FileInput";
import Button from "../../../../ui/components/Button/Button";
import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton"
import { useBriefForm } from "../../../../hooks/useBriefForm";
import { useEffect, useState } from "react";

function BriefForm({ setSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingText, setLoadingText] = useState('Отправляем.');
  useEffect(() => {
    let interval;
    if (isSubmitting) {
      const texts = ['Отправляем.', 'Отправляем..', 'Отправляем...'];
      let index = 0;
      interval = setInterval(() => {
        index = (index + 1) % texts.length;
        setLoadingText(texts[index]);
      }, 400);
    } else {
      setLoadingText('Отправить');
    }
    return () => clearInterval(interval);
  }, [isSubmitting]);
  const initialValues = {
    name: "",
    number: "",
    other_contact: "",
    project_name: "",
    role: "",
    link: "",
    design: "no",
    development: "no",
    support: "no",
    brending: "no",
    other_interest: "",
    price: "Менее 1 млн",
    file: "",
    comments: "",
    checkbox: false,
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Заполните поле";
    }
    if (!values.number) {
      errors.number = "Заполните поле";
    }
    if (!values.other_contact) {
      errors.other_contact = "Заполните поле";
    }
    if (
      values.number && values.number.includes('+7 (') &&
      !/(?:\D*\d){11}\D*/.test(values.number))
     {
      errors.number = "Укажите корректный телефон";
    }
    if (
      values.other_contact &&
      !(
        /^@/.test(values.other_contact) ||
        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(
          values.other_contact
        )
      )
    ) {
      errors.other_contact = "Допустимые форматы: @ivan-ivanov, Ivan@mail.ru";
    }
    if (
      values.link &&
      !/^(https?:\/\/)?(www\.)?([a-z0-9-]+\.[a-z]{2,})(\/[^\s]*)?$/i.test(
        values.link
      )
    ) {
      errors.link = "Допустимый формат: example.ru";
    }

    if (!values.checkbox) {
      errors.checkbox = "Без согласия не получится :(";
    }
    return errors;
  };

  const { values, handleChange, handleSubmit, errors } = useBriefForm(
    initialValues,
    validate,
    setSubmit,
    setIsSubmitting
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
      <fieldset className={styles.set}>
        <p className={`text text_type_xs text_color_secondary ${styles.title}`}>
          Общая информация
        </p>
        <div className={styles.wrapper}>
          <div className={styles.inputs_wrapper}>
            <BriefInput
              label={"Ваше имя*"}
              placeholder={"Иван"}
              value={values.name}
              name={"name"}
              onChange={handleChange}
            >
              {errors.name && (
                <p
                  className={`text text_type_xs text_color_error ${styles.error}`}
                >
                  {errors.name}
                </p>
              )}
            </BriefInput>
            <BriefInput
              label={"Номер телефона*"}
              placeholder={"+7 (ХXX) XXX-XX-XX"}
              value={values.number}
              name={"number"}
              onChange={handleChange}
            >
              {errors.number && (
                <p
                  className={`text text_type_xs text_color_error ${styles.error}`}
                >
                  {errors.number}
                </p>
              )}
            </BriefInput>
            <BriefInput
              label={"Telegram или почта*"}
              placeholder={"@ivan-ivanov"}
              value={values.other_contact}
              name={"other_contact"}
              onChange={handleChange}
            >
              {errors.other_contact && (
                <p
                  className={`text text_type_xs text_color_error ${styles.error}`}
                >
                  {errors.other_contact}
                </p>
              )}
            </BriefInput>
          </div>
          <div className={styles.inputs_wrapper}>
            <BriefInput
              label={"Название проекта"}
              placeholder={"Мой проект"}
              value={values.project_name}
              name={"project_name"}
              onChange={handleChange}
            />
            <BriefInput
              label={"Ваша роль на проекте"}
              placeholder={"Менеджер"}
              value={values.role}
              name={"role"}
              onChange={handleChange}
            />
            <BriefInput
              label={"Ссылка на сайт компании"}
              placeholder={"example.ru"}
              value={values.link}
              name={"link"}
              onChange={handleChange}
            >
              {errors.link && (
                <p
                  className={`text text_type_xs text_color_error ${styles.error}`}
                >
                  {errors.link}
                </p>
              )}
            </BriefInput>
          </div>
        </div>
      </fieldset>
      <fieldset className={styles.set}>
        <p
          className={`text text_type_xs text_color_secondary ${styles.title} ${styles.padding}`}
        >
          Вас интересует
        </p>
        <div className={styles.switch_wrapper}>
          <SwitchBlock
            text={"Дизайн"}
            name={"design"}
            selectedOption={values.design}
            onChange={handleChange}
          />
          <SwitchBlock
            text={"Разработка"}
            name={"development"}
            selectedOption={values.development}
            onChange={handleChange}
          />
          <SwitchBlock
            text={"Дизайн-поддержка"}
            name={"support"}
            selectedOption={values.support}
            onChange={handleChange}
          />
          <SwitchBlock
            text={"Брендинг"}
            name={"brending"}
            selectedOption={values.brending}
            onChange={handleChange}
          />
          <SwitchBlock text={"Другое"}>
            <BriefInput
              placeholder={"Например, UX аудит"}
              value={values.other_interest}
              name={"other_interest"}
              onChange={handleChange}
            />
          </SwitchBlock>
        </div>
      </fieldset>
      <fieldset className={styles.set}>
        <p className={`text text_type_xs text_color_secondary ${styles.title}`}>
          Бюджет
        </p>
        <div className={styles.radio_wrapper}>
          <RadioButton
            value={"Менее 1 млн"}
            selectedOption={values.price}
            onChange={handleChange}
          />
          <RadioButton
            value={"1–3 млн"}
            selectedOption={values.price}
            onChange={handleChange}
          />
          <RadioButton
            value={"3–5 млн"}
            selectedOption={values.price}
            onChange={handleChange}
          />
          <RadioButton
            value={"Более 5 млн"}
            selectedOption={values.price}
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <fieldset className={styles.set}>
        <p
          className={`text text_type_xs text_color_secondary ${styles.title} `}
        >
          Расширенный бриф
        </p>
        <div className={styles.btn_wrapper}>
          <FileInput value={values.file} onChange={handleChange} />
          <TextIconButton
            icon={"link"}
            download
            text={"Смотреть наши вопросы"}
            side={"left"}
            url={"https://docs.google.com/document/d/1SSZyI6nwz6oudeAlhvYfu3y_U-RliV2Qx_SfEFfKu88/edit?usp=sharing"}
            tabletSize={"m"}
          />
        </div>
      </fieldset>
      <fieldset className={styles.set}>
        <p className={`text text_type_xs text_color_secondary ${styles.title}`}>
          Расскажите о вашем проекте
        </p>
        <div className={styles.textarea_wrapper}>
          <BriefInput
            type={"textarea"}
            placeholder={"Задачи, сроки, пожелания"}
            value={values.comments}
            name={"comments"}
            onChange={handleChange}
          />
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={values.checkbox}
              onChange={handleChange}
              className={styles.checkbox_input}
            />
            <label htmlFor="checkbox" className={`text ${styles.label}`}>
              Я&nbsp;даю согласие на&nbsp;обработку персональных данных,
              принимаю условия&nbsp;
              <a
                href={policy}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Соглашения об&nbsp;обработке персональных данных пользователей
              </a>
              &nbsp;и&nbsp;разрешаю передачу данных сервису «Яндекс.Метрика»
              {errors.checkbox && (
                <p
                  className={`text text_color_error ${styles.error_small}`}
                >
                  {errors.checkbox}
                </p>
              )}
            </label>
          </div>
          <Button text={isSubmitting ? loadingText : 'Отправить'} isDisabled={isSubmitting ? true : false} type={"submit"} color />
        </div>
      </fieldset>
    </form>
  );
}

export default BriefForm;
