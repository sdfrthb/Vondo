import React from 'react';
import teamData from '../../../../utils/teamData';
import styles from './AboutWork.module.css'

function AboutWork() {
  const workers = ['Вася', 'Егор', 'Костя', 'Таня', 'Миша', 'Аня']
  // const {name, projectRole, photo} = teamData(person)
  return (
    <section className={styles.wrapper}>
          <p className={`text text_type_xs`}>По работе</p>
          <div className={styles.column}>
            <p className={`text text_type_m`}>
            Мы рассматриваем все заявки от дизайнеров интерфейсов
            </p>
            <p className={`text text_type_m`}>
            Направьте ссылки на свои проекты и loom с рассказом об одном из них в Telegram
            <br />
            <span>
            @vondo_hiring
            </span>
          </p>
          </div>

          <div className={styles.photo_wrapper}>
          {workers.map((person) => (
        <React.Fragment key={person}>
          <div style={{backgroundImage: `url(${teamData(person).photo})`}} className={styles.photo}> </div>
        </React.Fragment>
        ))}
        <div className={styles.photo}>
          <p className='text text_type_m'>10+</p>
        </div>
        <p className='text text_type_xs'>Ждем тебя!</p>
          </div>
        </section>
   );
}

export default AboutWork;
