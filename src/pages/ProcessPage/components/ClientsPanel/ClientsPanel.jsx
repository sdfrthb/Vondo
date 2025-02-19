import TextIconButton from '../../../../ui/components/TextIconButton/TextIconButton';
import styles from './ClientsPanel.module.css'
function ClientsPannel() {
  return ( <div>
<div className={styles.links}>
<TextIconButton
            icon={"arrow up"}
            redirect
            text={"Процессы с клиентом"}
            url={"/processes"}
          />
</div>
  </div> );
}

export default ClientsPannel;
