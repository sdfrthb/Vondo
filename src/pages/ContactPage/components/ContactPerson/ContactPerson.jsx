import { useMediaQuery } from "react-responsive";
import teamData from "../../../../utils/teamData";
import styles from "./ContactPerson.module.css";

function ContactPerson({ person, children }) {
  const { name, fullPhotoContact, role } = teamData(person);
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  return (
    <div className={styles.wrapper}>
      <div
        style={{ backgroundImage: `url(${fullPhotoContact})` }}
        className={styles.photo}
      >
        {" "}
      </div>
      <div className={styles.info}>
        {isDesktop ? (
          <>
            <p className={`text text_type_m`}>{name}</p>
            <p className={`text text_type_accent_m ${styles.role}`}>{role}</p>
          </>
        ) : (
          <div>
            <p className={`text text_type_m`}>{name}</p>
            <p className={`text text_type_accent_m ${styles.role}`}>{role}</p>
          </div>
        )}

        <div className={styles.links}>{children}</div>
      </div>
    </div>
  );
}

export default ContactPerson;
