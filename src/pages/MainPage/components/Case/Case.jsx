import CaseData from "./CaseData/CaseData";
import styles from './Case.module.css'

function Case({caseImage, ...props}) {
  return (
    <article className={styles.case}>
      <img src={caseImage} className={styles.image} />
      <CaseData {...props}/>
    </article>
   );
}

export default Case;
