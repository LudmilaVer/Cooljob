import styles from './SearchBar.module.css';
import DisneyLogo from '../../assets/Disney.svg';
import FacebookLogo from '../../assets/Facebook.svg';
import MicrosoftLogo from '../../assets/Microsoft.svg';
import SonyLogo from '../../assets/Sony.svg';
import ColaLogo from '../../assets/Cola.svg';
import Location1 from '../../assets/Location1.svg'
import search1 from '../../assets/search1.svg'
import Background from '../../assets/Background.svg'

function SearchBar() {
  return (
    <>
      <div className={styles.search_div}>
        <h1 className={styles.search_title}>
          Один клик<br />и работа в кармане
        </h1>
        <div className={styles.form_container}>
          <form className={styles.serch_form}>
            <img src={search1} />
            <input placeholder='Должность или компания' className={styles.first_input} />
            <span className={styles.form_span} />
            <img src={Location1} />
            <input placeholder='Город, Страна' className={styles.second_input} />
          </form>
          <button className={styles.form_button}>
              Поиск
          </button>
          <img src='Background'/>
        </div>
      </div>
      <div className={styles.companies}>
        <p className={styles.companies_title}>
          Помогаем найти работу:
        </p>
        <div className={styles.companies_logos}>
          <img alt='Disney' src={DisneyLogo} className={styles.logo} />
          <img alt='Facebook' src={FacebookLogo} className={styles.logo} />
          <img alt='Microsoft' src={MicrosoftLogo} className={styles.logo} />
          <img alt='Sony' src={SonyLogo} className={styles.logo} />
          <img alt='Cola' src={ColaLogo} className={styles.logo} />
        </div>
      </div>
    </>
  );
}

export default SearchBar;