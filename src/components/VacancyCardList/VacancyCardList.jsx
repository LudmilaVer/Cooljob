import VacancyCard from '../VacancyCard/VacancyCard';
import styles from './VacancyCardList.module.css';
import Sony from '../../assets/Sony.svg';
import Facebook from '../../assets/Facebook.svg';
import Cola from '../../assets/Cola.svg';

function VacancyCardList() {
  const vacancyCardsData = [
    {
      color: '#5182FF',
      category: 'Финансы',
      vacancyCardText: 'Менеджер по управлению финансами в крупной компании',
      location: 'Осака, Япония',
      company: Sony,
      companyName: 'Sony, 3 дня назад'
    },
    {
      color: '#FF51EE',
      category: 'Продажи',
      vacancyCardText: 'Специалист по продажам',
      location: 'Коясан, Япония',
      company: Facebook,
      companyName: 'Facebook, 7 дней назад'
    },
    {
      color: '#58D94D',
      category: 'Служба поддержки',
      vacancyCardText: 'Оператор колл центра',
      location: 'Томаму, Япония',
      company: Cola,
      companyName: 'CocaCola, 1 день назад'
    },
    {
      color: '#FF9051',
      category: 'Мультимедиа',
      vacancyCardText: 'Системный администратор',
      location: 'Токио, Япония',
      company: Sony,
      companyName: 'Sony, 3 дня назад'
    },
    {
      color: '#F84242',
      category: 'Дизайн',
      vacancyCardText: 'Дизайнер интерьера в профессиональную студию в цнетре города',
      location: 'Йокогама, Япония',
      company: Facebook,
      companyName: 'Facebook, 7 дней назад'
    },
    {
      color: '#383838',
      category: 'Грузоперевозки',
      vacancyCardText: 'Водитель на дальние дистанции',
      location: 'Кобе, Япония',
      company: Cola,
      companyName: 'CocaCola, 1 день назад'
    },
  ]

  return (
    <div className={styles.card_list}>
      <>
        <p className={styles.card_list_title}>
          Новые вакансии
        </p>
        <p className={styles.card_list_subtitle}>
          Найди работу своей мечты прямо сейчас
        </p>
      </>
      <div className={styles.cards}>
        {vacancyCardsData.map((vacancyCardData, index) => (
          <VacancyCard key={vacancyCardData.category+index} vacancyCardData={vacancyCardData} />
        ))}
      </div>
      <div className={styles.button_div}>
        <button className={styles.button} >
          Все вакансии
        </button>
      </div>
    </div>
  );
}

export default VacancyCardList;