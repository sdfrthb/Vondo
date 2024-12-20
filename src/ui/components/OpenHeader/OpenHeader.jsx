import { createPortal } from "react-dom";
import styles from "./OpenHeader.module.css";
import { Mobile, Tablet } from "../../../lib/media/request";
import Logo from "../../icons/Logo/Logo";
import WorkHoursStatus from "../../../utils/WorkHoursStatus";
import HeaderLink from "../HeaderLink/HeaderLink";
import arrowDown from "../../../images/down.svg";
import arrowUp from "../../../images/up.svg";
import card from "../../../images/company_card.pdf";
import photo from "../../../images/vasya-min.png";
import TextButton from "../TextButton/TextButton";


const modalRoot = document.getElementById("header-modal");

export default function OpenHeader({ onClose }) {
  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Tablet>
          <Logo width={10.94} height={2.343} />
        </Tablet>
        <Mobile>
          <Logo width={22.4} height={4.8} />
        </Mobile>
        <div className={styles.nav_menu}>
          <a
            href={"#form"}
            className={`text text_type_s text_color_primary ${styles.link}`}
          >
            Оценить проект
          </a>
          <button className={styles.btn} onClick={onClose}></button>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <WorkHoursStatus />
          <div className={styles.links}>
            <div className={styles.column}>
              <HeaderLink link={"/cases"}>Кейсы</HeaderLink>
              <HeaderLink link={"/principles"}>Принципы</HeaderLink>
              <HeaderLink link={"/journal"}>Журнал</HeaderLink>
              <HeaderLink link={"/education"}>Школа</HeaderLink>
            </div>
            <div className={styles.column}>
              <HeaderLink link={"/brif"}>Бриф</HeaderLink>
              <HeaderLink link={"/contacts"}>Контакты</HeaderLink>
            </div>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.cards}>
            <a
              href={card}
              target="_blank"
              className={`${styles.card_wrapper} text_color_primary`}
            >
              <div className={styles.left}>
                <div className={styles.type}>PDF</div>
                <div className={styles.texts}>
                  <p className={`text text_type_s`}>Карточка компании</p>
                  <p className={`text text_type_xs text_color_secondary`}>
                    0.4Мb
                  </p>
                </div>
              </div>
              <div
                style={{ backgroundImage: `url(${arrowDown})` }}
                className={styles.arrow}
              ></div>
            </a>
            <a
              href="/#form"
              className={`${styles.card_wrapper} ${styles.card_wrapper_black} text_color_accent`}
            >
              <div className={styles.left}>
                <div
                  className={styles.type}
                  style={{ backgroundImage: `url(${photo})` }}
                ></div>
                <div className={styles.texts}>
                  <p className={`text text_type_s`}>Оценить проект</p>
                  <p className={`text text_type_xs`}>
                    Свяжемся с вами до 18:00
                  </p>
                </div>
              </div>
              <div
                style={{ backgroundImage: `url(${arrowUp})` }}
                className={styles.arrow}
              ></div>
            </a>
          </div>
          <div className={styles.info}>
            <p className={`text text_type_s`}>
              Москва, шлюзовая набережная, 8 <br /> м. Павелецкая
            </p>
            <div className={styles.buttons}>
              <TextButton
                text={"+7 912 992-53-84"}
                url={"tel:89129925384"}
                type={"s"}
              />
              <TextButton
                text={"sales@vondo.ru"}
                url={"mailto:sales@vondo.ru"}
                type={"s"}
              />
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>,
    modalRoot
  );
}
