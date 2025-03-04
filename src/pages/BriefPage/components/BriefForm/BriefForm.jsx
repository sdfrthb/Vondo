import BriefInput from "../BriefInput/BriefInput";
import SwitchBlock from "../SwitcherBlock/SwitchBlock";
import styles from "./BriefForm.module.css";

function BriefForm() {
  return (
    <form className={styles.form}>
      <fieldset className={styles.set}>
        <p className={`text text_type_xs ${styles.title}`}>Общая информация</p>
        <div className={styles.inputs_wrapper}>
          <BriefInput label={"Ваше имя*"} placeholder={"Иван"} />
          <BriefInput label={"Номер телефона*"} placeholder={"+7 (ХXX) XXX-XX-XX"} />
          <BriefInput label={"Telegram или почта*"} placeholder={"@ivan-ivanov"} />
        </div>
        <div className={styles.inputs_wrapper}>
          <BriefInput label={"Название проекта"} placeholder={"Мой проект"} />
          <BriefInput label={"Ваша роль на проекте"} placeholder={"Менеджер"} />
          <BriefInput label={"Ссылка на сайт компании"} placeholder={"https://"} />
        </div>
      </fieldset>
      <fieldset className={styles.set}>
        <p className={`text text_type_xs ${styles.title}`}>Вас интересует</p>
        <div className={styles.switch_wrapper}>
          <SwitchBlock text={"Дизайн"} name={"design"}/>
          <SwitchBlock text={"Разработка"} name={"development"}/>
          <SwitchBlock text={"Дизайн-поддержка"} name={"support"}/>
          <SwitchBlock text={"Брендинг"} name={"brending"}/>
          <SwitchBlock text={"Другое"} >
          <BriefInput placeholder={"Например, UX аудит"} />
          </SwitchBlock>
        </div>
      </fieldset>
    </form>
  );
}

export default BriefForm;
