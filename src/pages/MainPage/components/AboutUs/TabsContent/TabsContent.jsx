import { useInView } from 'react-intersection-observer';
import styles from './TabsContent.module.css'

function TabsContent( {title, description, price} ) {
  const [ref, inView] = useInView({ threshold: 0 })
  return (
    <div className={`${styles.wrapper} ${inView ? styles.animation : ''}`} ref={ref}>
      <p className={`text text_type_accent_l`}>{title}</p>
      <div className={styles.info_container}>
        <p className={`text text_type_s ${styles.description}`}>{description}</p>
        <p className={`text text_type_s ${styles.price}`}>{price}</p>
      </div>
    </div>
   );
}

export default TabsContent;
