import Button from "../../../../ui/components/Button/Button";
import Input from "../../../../ui/components/FormSection/Input/Input";
import policy from "../../../../images/policy.pdf";
import styles from "./QuestionsForm.module.css";
import { useSchoolForm } from "../../../../hooks/useSchoolForm";
import { type } from "@testing-library/user-event/dist/type";

function QuestionsForm({ setSubmit, type }) {
  const validate = (values) => {
    const errors = {};
    if (!values.other_contact && !values.number) {
      errors.all = "Заполните хотя бы одно поле: Телефон, Telegram или почту.";
    } else if (
      values.other_contact &&
      !(
        /^@/.test(values.other_contact) ||
        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(
          values.other_contact
        )
      )
    ) {
      errors.other_contact = "Допустимые форматы: @ivan-ivanov, Ivan@mail.ru";
    }  if (
      values.number &&
      values.number.includes("+7 (") &&
      !/(?:\D*\d){11}\D*/.test(values.number)
    ) {
      errors.number = "Укажите корректный телефон";
    }
    if (!values.checkbox) {
      errors.checkbox = "Без согласия не получится :(";
    }
    return errors;
  };

  const { values, handleChange, handleSubmit, errors } = useSchoolForm(
    { number: "", other_contact: "", checkbox: false },
    validate,
    setSubmit
  );
  return (
    <form className={styles.column} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <Input
          label={"Телефон"}
          name={"number"}
          placeholder={"+7 (ХXX) XXX-XX-XX"}
          value={values.number}
          onChange={handleChange}
        >
          {errors.number && (
          <p className={`text text_color_error`}>
            {errors.number}
          </p>
        )}
        </Input>

        <p className={`text text_type_xs text_color_secondary_accent`}>или</p>
        <Input
          label={"Telegram или почта"}
          placeholder={"@ivan-ivanov"}
          value={values.other_contact}
          name={"other_contact"}
          onChange={handleChange}
        >
          {errors.other_contact && (
          <p className={`text text_color_error`}>
            {errors.other_contact}
          </p>
        )}
        </Input>
        {type==="questions" && <Input
          type={"textarea"}
          label={"Ваш вопрос"}
          placeholder={"Подойдёт ли курс новичку?"}
          value={values.question}
          name={"other_contact"}
          onChange={handleChange}
        ></Input>}

        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className={styles.checkbox_input}
            checked={values.checkbox}
            onChange={handleChange}
          />
          <label htmlFor="checkbox" className={`text ${styles.label}`}>
            Я&nbsp;даю согласие на&nbsp;обработку персональных данных, принимаю
            условия
            <a
              href={policy}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              &nbsp;Соглашения об&nbsp;обработке персональных данных
              пользователей&nbsp;
            </a>
            и&nbsp;разрешаю передачу данных сервису «Яндекс.Метрика»
            {errors.checkbox && (
              <p className={`text text_color_error ${styles.error_small}`}>
                {errors.checkbox}
              </p>
            )}
          </label>
        </div>
        <Button text={"Отправить"} type={"submit"} />
        {errors.all && (
          <p className={`text text_color_error ${styles.error}`}>
            {errors.all}
          </p>
        )}
      </div>
    </form>
  );
}

export default QuestionsForm;
