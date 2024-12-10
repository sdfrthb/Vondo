import News from "./News/News";
import styles from './NewsList.module.css'

function NewsList() {
  return (
    <section className={styles.wrapper}>
      <h2 className={`text text_type_h2`}>Пишем</h2>
      <div className={styles.container}>
        <News title={'Изменили процесс найма и остались в плюсе.\u000AПара инсайтов от студии vondo'} date={`Июль`}
        url={'https://vc.ru/design/1383444-izmenili-process-naima-dizainerov-i-ostalis-v-plyuse-para-insaitov-ot-studii-vondo'} icon={'vc'}/>
        <News title={'Все дизайн – каналы России в одном посте'} date={`Июль`}
        url={''} icon={'tg'}/>
        <News title={'Принципы работы в студии vondo'} date={`Июль`}
        url={'https://t.me/wevondo/21'} icon={'tg'}/>
      </div>
    </section>
   );
}

export default NewsList;
