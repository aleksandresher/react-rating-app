import Star from "../../images/Path.png";
import styles from "./Rate.module.css";

function Rate({ rate, clickHandler, rateHandler }) {
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.rating}>
        <div className={styles.starDiv}>
          <img src={Star} alt="star" className={styles.star} />
        </div>

        <h1 className={styles.mainQuestion}>How did we do?</h1>
        <p className={styles.subQuestion}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className={styles.starContainer}>
          {rate.map((item) => (
            <div
              key={item.id}
              className={item.rated ? styles.rated : styles.notRated}
              onClick={clickHandler}
            >
              {item.title}
            </div>
          ))}
        </div>
        <button className={styles.submitBtn} onClick={rateHandler}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Rate;
