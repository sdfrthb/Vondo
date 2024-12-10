import CaseData from "./CaseData/CaseData";
import styles from './Case.module.css'
import LoomVideo from "../LoomVideo/LoomVideo";


function Case({type,caseImage, ...props}) {
  return (
    <article className={type==="horizontal" ? styles.case_hor : styles.case_vert}>
      <img src={caseImage} className={type==="horizontal" ? styles.image_hor : styles.image_vert} />
      <CaseData {...props}/>
    </article>

   );
}

export default Case;
