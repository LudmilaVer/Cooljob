import styles from './Footer.module.css';
import LinkedIn from '../../assets/LinkedIn.svg';
import Google from '../../assets/Google.svg';
import Twitter from '../../assets/Twitter.svg';
import FacebookMini from '../../assets/FacebookMini.svg';

function App() {
  const citiesList = [
    'Осака',
    'Коясан',
    'Токио',
    'Хаконэ',
    'Наэба',
    'Томаму',
    'Йокогама',
    'Нагоя',
    'Саппоро',
    'Кобе'
  ];

  return (
    <footer className={styles.footer} >
      <p className={styles.title} >Популярные города</p>
      <div className={styles.cities_list} >
        {citiesList.map((city, index) => (
          <p key={city+index} >{city}</p>
        ))}
      </div>
      <div className={styles.logo_and_links} >
        <p className={styles.logo} >
          Cooljob
        </p>
        <div className={styles.links} >
            <a href='#' >
              <img alt='LinkedIn' src={LinkedIn} />
            </a>
            <a href='#' >
              <img alt='Google' src={Google} />
            </a>
            <a href='#' >
              <img alt='Twitter' src={Twitter} />
            </a>
            <a href='#' >
              <img alt='Facebook' src={FacebookMini} />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default App;