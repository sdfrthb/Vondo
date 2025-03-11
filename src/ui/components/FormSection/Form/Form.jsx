import styles from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../../Button/Button";
import policy from "../../../../images/policy.pdf"
import { useForm } from "../../../../hooks/useForm";

function Form({setSubmit}) {

  const validate = (values) => {
    const errors = {};
    if (!values.tg && !values.mail && !values.number) {
      errors.all = "Заполните одно из полей";
    } else if (values.tg && !/^@/.test(values.tg)) {
      errors.tg = "Укажите корректный Telegram";
    } else if (
      values.mail &&
      !/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(values.mail)
    ) {
      errors.mail = "Укажите корректную почту";
    } else if (
      values.number &&
      !/(?:\D*\d){11}\D*/.test(values.number)
    ) {
      errors.number = "Укажите корректный телефон";
    }
    else if (!values.checkbox) {
      errors.checkbox = "Требуется ваше согласие";
    }
    return errors;
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    { tg: "", number: "", mail: "", checkbox: false },
    validate, setSubmit
  );

  return (
    <form className={styles.column} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        {errors.all && <div className={styles.invisible}>{errors.all}</div>}
        <Input
          label={"Telegram"}
          name={"tg"}
          placeholder={"@ivan-ivanov"}
          value={values.tg}
          onChange={handleChange}
        >
          {errors.tg && <div className={styles.invisible}>{errors.tg}</div>}
        </Input>

        <p className={`text text_type_xs text_color_secondary_accent`}>или</p>
        <Input
          label={"Телефон"}
          name={"number"}
          placeholder={"+7 (ХXX) XXX-XX-XX"}
          value={values.number}
          onChange={handleChange}
        >
          {errors.number && (
            <div className={styles.invisible}>{errors.number}</div>
          )}
        </Input>

        <p className={`text text_type_xs text_color_secondary_accent`}>или</p>
        <Input
          label={"Email"}
          name={"mail"}
          placeholder={"ivan@mail.ru"}
          value={values.mail}
          onChange={handleChange}
        >
          {errors.mail && <div className={styles.invisible}>{errors.mail}</div>}
        </Input>

        <div className={styles.checkbox}>
        {errors.checkbox && <div className={styles.invisible}>{errors.checkbox}</div>}
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
            <a href={policy} target="_blank" rel="noreferrer" className={styles.link}>
              &nbsp;Соглашения об&nbsp;обработке персональных данных
              пользователей&nbsp;
            </a>
            и&nbsp;разрешаю передачу данных сервису «Яндекс.Метрика»
          </label>
        </div>
        <Button text={"Отправить"} type={"submit"} />
      </div>
    </form>
  );
}

export default Form;
