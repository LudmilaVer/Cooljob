import styles from './VacancyCard.module.css';
import Location from '../../assets/Location.svg';

function VacancyCard({vacancyCardData}) {
  return (
    <div className={styles.vacancy_card}>
      <div className={styles.category}>
        <div className={styles.category_circle} style={{background: vacancyCardData.color}}></div>
        <p className={styles.category_title} >{vacancyCardData.category}</p>
      </div>
      <p className={styles.vacancy_title}>
        {vacancyCardData.vacancyCardText}
      </p>
      <div className={styles.location}>
        <img alt='Location' src={Location} className={styles.location_img} />
        {vacancyCardData.location}
      </div>
      <div className={styles.company} >
      <img alt='Company logo' src={vacancyCardData.company} className={styles.company_logo} />
      {vacancyCardData.companyName}
      </div>
    </div>
  );
}

export default VacancyCard;