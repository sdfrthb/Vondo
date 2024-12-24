import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
import News from "./News/News";
import styles from './NewsList.module.css'

function NewsList() {
  return (
    <section className={styles.wrapper}>
      <h2 className={`text text_type_h2`}>Последние публикации</h2>
      <div className={styles.container}>
        <News title={'Изменили процесс найма и\u00A0остались\u00A0в\u00A0плюсе.\u000AПара инсайтов от студии vondo'} date={`Июль`}
        url={'https://vc.ru/design/1383444-izmenili-process-naima-dizainerov-i-ostalis-v-plyuse-para-insaitov-ot-studii-vondo'} icon={'vc'}/>
        <News title={'Все дизайн – каналы России в\u00A0одном\u00A0посте'} date={`Июль`}
        url={''} icon={'tg'}/>
        <News title={'Принципы работы в студии vondo'} date={`Июль`}
        url={'https://t.me/wevondo/21'} icon={'tg'}/>
        <News title={'Баланс между бизнес-целями\u000Aи\u00A0пользовательским опытом'} date={`Июль`}
        url={''} icon={'vondo'}/>
        <News title={'Создание дизайн-системы:\u000Aинструкция\u00A0для\u00A0продуктовых команд'} date={`Июль`}
        url={''} icon={'vondo'}/>
      </div>
      <TextIconButton text={'Читать все'} type={'arrow'} url={"/journal"}/>
    </section>
   );
}

export default NewsList;
