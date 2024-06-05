import styles from './CategoryCardList.module.css';
import CategoryCard from '../CategoryCard/CategoryCard.jsx';
import Circle from '../../assets/Circle.svg';
import Car from '../../assets/Car.svg';
import Window from '../../assets/Window.svg';
import ForkKnife from '../../assets/ForkKnife.svg';
import Bandage from '../../assets/Bandage.svg';
import Movie from '../../assets/Movie.svg';
import Message from '../../assets/Message.svg';
import Box from '../../assets/Box.svg';
import Cart from '../../assets/Cart.svg';
import Arrow from '../../assets/Arrow.svg';

function CategoryCardList() {
  const cardInfo = [
    {text: 'Финансы', url: Circle},
    {text: 'Грузоперевозки',url: Car},
    {text: 'Дизайн',url: Window},
    {text: 'Ресторанный бизнес',url: ForkKnife},
    {text: 'Медицина',url: Bandage},
    {text: 'Мультимедиа',url: Movie},
    {text: 'Служба поддержки',url: Message},
    {text: 'Менеджмент',url: Box},
    {text: 'Продажи',url: Cart},
  ];

  return (
    <section className={styles.category_card_list}>
      <p className={styles.category_card_list_title}>
        Работа<br />
        по категориям
      </p>
      <div className={styles.cards}>
        {cardInfo.map ((singleCardInfo, index) => (
          <CategoryCard key={index + singleCardInfo.text} cardInfo={singleCardInfo}/>
        ))}
        <div className={styles.more_card}>
          <img alt='Arrow' src={Arrow} />
          <p>
            Больше<br />
            Категорий
          </p>
        </div>
      </div>
    </section>
  );
}

export default CategoryCardList;