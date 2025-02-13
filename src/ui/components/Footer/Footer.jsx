import Logo from "../../icons/Logo/Logo";
import TextButton from "../TextButton/TextButton";
import card from "../../../images/company_card.pdf";
import styles from "./Footer.module.css";
import { Desktop, Mobile, Tablet } from "../../../lib/media/request";
import { useMediaQuery } from "react-responsive";
import Avatar from "../Avatar/Avatar";
function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <footer className={styles.footer}>
      { isDesktop ? (
          <Logo width={8.333} height={1.875} />
        ) :  isMobile ?
        <Logo width={43.467} height={9.6} /> :
        (
          <Logo width={15.625} height={3.385} />
        )}
      <div className={styles.columns}>
        <Desktop>
          <div className={styles.info}>
            <TextButton
              text={"+7 929 236 27 70"}
              url={"tel:89292362770"}
              type={"xs"}
            />
            <TextButton
              text={"sales@vondo.ru"}
              url={"mailto:sales@vondo.ru"}
              type={"xs"}
            />
            <div className={styles.creators}>
              <div className={styles.photo_wrapper}>
                <Avatar person={"Вася"} size_l={54} invisible />
                <Avatar person={"Миша"} size_l={54} invisible />
                <Avatar person={"Марина"} size_l={54} invisible />
                <Avatar person={"Таня"} size_l={54} invisible />
              </div>
              <p className={`text text_type_xs`}>
                Сделали этот сайт за 30 дней
              </p>
            </div>
          </div>
          <div className={styles.add_info}>
            <TextButton
              text={"Карточка компании 0.4Mb"}
              url={card}
              type={"xs"}
            />
          </div>
          <div className={styles.social_privacy}>
            <div className={styles.social}>
              <TextButton
                text={"Вконтакте"}
                url={"https://vk.com/wevondo"}
                type={"xs"}
              />
              <TextButton
                text={"Telegram"}
                url={"https://t.me/wevondo"}
                type={"xs"}
              />
              <TextButton
                text={"VC"}
                url={"https://vc.ru/u/3757624-studiya-vondo"}
                type={"xs"}
              />
            </div>
            <div className={styles.privacy}>
              <p className={`text text_type_xs`}>Vondo 2025</p>
              <TextButton
                text={"Политика обработки персональных данных"}
                url={""}
                type={"xs"}
              />
            </div>
          </div>
        </Desktop>
        <Tablet>
          <div className={styles.info}>
            <TextButton
              text={"Карточка компании 0.4Mb"}
              url={card}
              type={"xs"}
            />
            <div className={styles.social}>
            <TextButton
                text={"Telegram"}
                url={"https://t.me/wevondo"}
                type={"xs"}
              />
              <TextButton
                text={"Вконтакте"}
                url={"https://vk.com/wevondo"}
                type={"xs"}
              />
              <TextButton
                text={"VC"}
                url={"https://vc.ru/u/3757624-studiya-vondo"}
                type={"xs"}
              />
            </div>
            <div className={styles.creators}>
              <div className={styles.photo_wrapper}>
                <Avatar person={"Вася"} size_m={54} invisible />
                <Avatar person={"Миша"} size_m={54} invisible />
                <Avatar person={"Марина"} size_m={54} invisible />
                <Avatar person={"Таня"} size_m={54} invisible />
              </div>
              <p className={`text text_type_s`}>
                Сделали этот сайт за 30 дней
              </p>
            </div>
          </div>
          <div className={styles.privacy}>
            <div className={styles.add_info}>
            <TextButton
              text={"+7 929 236 27 70"}
              url={"tel:89292362770"}
              type={"xs"}
            />
              <TextButton
                text={"sales@vondo.ru"}
                url={"mailto:sales@vondo.ru"}
                type={"xs"}
              />
            </div>
            <div className={styles.social_privacy}>
              <p className={`text text_type_xs`}>Vondo 2025</p>
              <TextButton
                text={"Политика обработки персональных данных"}
                url={""}
                type={"xs"}
              />
            </div>
          </div>
        </Tablet>
        <Mobile>
          <div className={styles.info}>
            <TextButton
              text={"+7 929 236 27 70"}
              url={"tel:89292362770"}
              type={"s"}
            />
              <TextButton
                text={"sales@vondo.ru"}
                url={"mailto:sales@vondo.ru"}
                type={"s"}
              />
              <TextButton
                text={"Карточка компании 0.4Mb"}
                url={card}
                type={"s"}
              />
          </div>
          <div className={styles.social}>
            <TextButton
              text={"Вконтакте"}
              url={"https://vk.com/wevondo"}
              type={"s"}
            />
            <TextButton
              text={"Telegram"}
              url={"https://t.me/wevondo"}
              type={"s"}
            />
            <TextButton
              text={"VC"}
              url={"https://vc.ru/u/3757624-studiya-vondo"}
              type={"s"}
            />
          </div>
          <TextButton
            text={"Политика обработки персональных данных"}
            url={""}
            type={"s"}
          />
          <div className={styles.creators}>
            <div className={styles.photo_wrapper}>
              <Avatar person={"Вася"} size_s={54} invisible />
              <Avatar person={"Миша"} size_s={54} invisible />
              <Avatar person={"Марина"} size_s={54} invisible />
              <Avatar person={"Таня"} size_s={54} invisible />
            </div>
            <p className={`text text_type_xs ${styles.center}`}>Сделали этот сайт за 30 дней</p>
          </div>
        </Mobile>
      </div>
    </footer>
  );
}

export default Footer;
