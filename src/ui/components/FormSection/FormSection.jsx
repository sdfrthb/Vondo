import WorkHoursTexts from '../../../utils/WorkHoursTexts';
import teamData from '../../../utils/teamData';
import ArrowButton from '../ArrowButton/ArrowButton';
import Avatar from '../Avatar/Avatar';
import styles from './FormSection.module.css'
import Input from './Input/Input';

function FormSection() {

  const anyaInfo = teamData('Аня')
  const vasyaInfo = teamData('Вася')
  const mishaInfo = teamData('Миша')
  const submit = true

  return (
    <section id='form' className={`text_color_accent ${styles.form}`}>
      <div className={styles.info}>
        <p className={`text text_type_accent_m ${styles.title}`}>Свяжемся и договоримся о встрече, зададим вопросы, а на следующий день вышлем оценку</p>
        <div className={styles.workers}>
          <p className='text text_type_xs'>На встрече будут</p>
          <div className={styles.photo_wrapper}>
          <Avatar name={anyaInfo.name} role={anyaInfo.role} photo={anyaInfo.photo} size={'s'} />
          <Avatar name={mishaInfo.name} role={mishaInfo.role} photo={mishaInfo.photo} size={'s'} />
          <Avatar name={vasyaInfo.name} role={vasyaInfo.role} photo={vasyaInfo.photo} size={'s'} />
          </div>
        </div>
        <div className={styles.work_time}>
          <p className='text text_type_xs'>Когда свяжемся</p>
          <WorkHoursTexts />
        </div>
      </div>
      { submit ?
      <div className={styles.column}>
        <div className={styles.greeting}>
        <p className={`text text_type_accent_m`}>Спасибо!</p>
        <p className={`text text_type_s`}>Ваша заявка уже у нас</p>
      </div>
      <ArrowButton text={'Отправить повторно'}/>
      </div>

      :
      <form className={styles.column}>
        <Input label={'Telegram'} placeholder={'@ivan-ivanov'}/>
        <p className={`text text_type_xs text_color_secondary_accent`}>или</p>
        <Input label={'Телефон'} placeholder={'номер телефона'}/>
        <p className={`text text_type_xs text_color_secondary_accent`}>или</p>
        <Input label={'Email'} placeholder={'ivan@mail.ru'}/>
      </form>
      }
    </section>
   );
}

export default FormSection;
