import ContactInfo from "./components/ContactInfo/ContactInfo";
import styles from './ContactPage.module.css'

function ContactPage() {
  return (
    <div className={styles.content}>
      <ContactInfo />
    </div>
  );
}

export default ContactPage;
