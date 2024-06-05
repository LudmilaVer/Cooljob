import styles from './CategoryCard.module.css';

function CategoryCard({cardInfo}) {
  return (
    <div className={styles.category_card}>
      <img src={cardInfo.url} alt={cardInfo.text} />
      <p>{cardInfo.text}</p>
    </div>
  );
}

export default CategoryCard;