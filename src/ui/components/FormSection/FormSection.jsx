import { useState } from "react";
import WorkHoursTexts from "../../../utils/WorkHoursTexts";
import teamData from "../../../utils/teamData";
import ArrowButton from "../ArrowButton/ArrowButton";
import Avatar from "../Avatar/Avatar";
import styles from "./FormSection.module.css";
import Input from "./Input/Input";
import { useMediaQuery } from "react-responsive";
import { Mobile } from "../../../lib/media/request";

function FormSection() {
  const anyaInfo = teamData("Аня");
  const vasyaInfo = teamData("Вася");
  const mishaInfo = teamData("Миша");
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [submit, setSubmit] = useState();
  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [tg, setTg] = useState("");
  const [tgError, setTgError] = useState("");
  const [disabledButton, setDisabledButton] = useState(true)
  const checkbox = document.querySelector('[type="checkbox"]')


  const handleSubmit = (e) => {
    e.preventDefault();
      if (isValid()) {
        setSubmit(true);
      }
      else {
        checkbox.checked = false
      }
        setDisabledButton(true)

  };



  const isValid = () => {
    let result = true;
    setTgError("");
    setNumberError("");
    setMailError("");
    if (!/^@/.test(tg) && tg.length !== 0) {
      setTgError("Имя должно начинаться с @");
      result = false;
    }

    else if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(number) && number.length !== 0) {
      setNumberError("Введите корректный номер");
      result = false;
    }

    else if (!/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(mail) && mail.length !== 0) {
      setMailError("Введите корректную почту");
      result = false;
    }

    return result;
  };

  function checkButton(btn) {
    if ((tg.length !== 0 || mail.length !== 0 || number.length !== 0) && btn.checked) {
      setDisabledButton(false)
    }
  }

  return (
    <section
      onSubmit={handleSubmit}
      id="form"
      className={`text_color_accent ${styles.form}`}
    >
      <div className={styles.info}>
        <p
          className={`text ${
            isDesktop ? "text_type_accent_m" : "text_type_accent_s"
          } ${styles.title}`}
        >
          Свяжемся и&nbsp;договоримся о&nbsp;встрече, зададим вопросы, а&nbsp;на
          следующий день вышлем оценку
        </p>
        <Mobile>
          {submit ? (
            <div className={styles.column}>
              <div className={styles.greeting}>
                <p className={`text text_type_accent_m`}>Спасибо!</p>
                <p className={`text text_type_s`}>Ваша заявка уже у нас</p>
              </div>
              <ArrowButton
                text={"Отправить повторно"}
                onClick={() => setSubmit(false)}
              />
            </div>
          ) : (
            <form className={styles.column}>
              <div className={styles.inputs}>
                <Input
                  label={"Telegram"}
                  placeholder={"@ivan-ivanov"}
                  onChange={(e) => setTg(e.target.value)}
                />
                {tgError && <div className='text text_type_xs text_color_error'>{tgError}</div>}
                <p className={`text text_type_xs text_color_secondary_accent`}>
                  или
                </p>
                <Input
                  label={"Телефон"}
                  placeholder={"номер телефона"}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {numberError && <div className='text text_type_xs text_color_error'>{numberError}</div>}
                <p className={`text text_type_xs text_color_secondary_accent`}>
                  или
                </p>
                <Input
                  label={"Email"}
                  placeholder={"ivan@mail.ru"}
                  onChange={(e) => setMail(e.target.value)}
                />
                {mailError && <div className='text text_type_xs text_color_error'>{mailError}</div>}
                <ArrowButton text={"Отправить"} type={"submit"} isDisabled={disabledButton}/>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.checkbox_input} onChange={(e) => checkButton(e.target)}/>
                <label className={`text text_type_xs ${styles.label}`}>
                  Я согласен с{" "}
                  <a href="/" className={styles.link}>
                    правилами обработки персональных данных
                  </a>
                </label>
              </div>
            </form>
          )}
        </Mobile>
        <div className={styles.workers}>
          <p className="text text_type_xs">На встрече будут</p>
          <div className={styles.photo_wrapper}>
            <Avatar
              name={anyaInfo.name}
              role={anyaInfo.role}
              photo={anyaInfo.photo}
              size={"s"}
            />
            <Avatar
              name={mishaInfo.name}
              role={mishaInfo.role}
              photo={mishaInfo.photo}
              size={"s"}
            />
            <Avatar
              name={vasyaInfo.name}
              role={vasyaInfo.role}
              photo={vasyaInfo.photo}
              size={"s"}
            />
          </div>
        </div>
        <div className={styles.work_time}>
          <p className="text text_type_xs">Когда свяжемся</p>
          <WorkHoursTexts />
        </div>
      </div>
      {!isMobile &&
        (submit ? (
          <div className={styles.column}>
            <div className={styles.greeting}>
              <p className={`text text_type_accent_m`}>Спасибо!</p>
              <p className={`text text_type_s`}>Ваша заявка уже у нас</p>
            </div>
            <ArrowButton
              text={"Отправить повторно"}
              onClick={() => setSubmit(false)}
            />
          </div>
        ) : (
          <form className={styles.column}>
              <div className={styles.inputs}>
                <Input
                  label={"Telegram"}
                  placeholder={"@ivan-ivanov"}
                  onChange={(e) => setTg(e.target.value)}
                />
                {tgError && <div className='text text_type_xs text_color_error'>{tgError}</div>}
                <p className={`text text_type_xs text_color_secondary_accent`}>
                  или
                </p>
                <Input
                  label={"Телефон"}
                  placeholder={"номер телефона"}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {numberError && <div className='text text_type_xs text_color_error'>{numberError}</div>}
                <p className={`text text_type_xs text_color_secondary_accent`}>
                  или
                </p>
                <Input
                  label={"Email"}
                  placeholder={"ivan@mail.ru"}
                  onChange={(e) => setMail(e.target.value)}
                />
                {mailError && <div className='text text_type_xs text_color_error'>{mailError}</div>}
                <ArrowButton text={"Отправить"} type={"submit"} isDisabled={disabledButton}/>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" className={styles.checkbox_input} onChange={(e) => checkButton(e.target)}/>
                <label className={`text text_type_xs ${styles.label}`}>
                  Я согласен с{" "}
                  <a href="/" className={styles.link}>
                    правилами обработки персональных данных
                  </a>
                </label>
              </div>
            </form>
        ))}
    </section>
  );
}

export default FormSection;
