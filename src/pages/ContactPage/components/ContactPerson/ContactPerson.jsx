import { useMediaQuery } from "react-responsive";
import teamData from "../../../../utils/teamData";
import styles from "./ContactPerson.module.css";

function ContactPerson({ person, children }) {
  const { name, fullPhotoContact, role } = teamData(person);
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <div className={styles.wrapper}>
      <div
        style={{ backgroundImage: `url(${fullPhotoContact})` }}
        className={styles.photo}
      >
        {" "}
      </div>

      <div className={styles.info}>
      {!isMobile ? (
          <>
            <p className={`text text_type_accent_${isTablet ? 's' : 'm'}`}>{name}</p>
            <p className={`text text_type_${isMobile ? 's' : 'm'} ${styles.role}`}>{role}</p>
          </>
        ) : (
          <div>
            <p className={`text text_type_accent_${isTablet ? 's' : 'm'}`}>{name}</p>
            <p className={`text text_type_${isMobile ? 's' : 'm'} ${styles.role}`}>{role}</p>
          </div>
        )}

        <div className={styles.links}>{children}</div>
      </div>
    </div>
  );
}

export default ContactPerson;
