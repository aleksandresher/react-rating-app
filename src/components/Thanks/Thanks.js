import React from "react";
import logo from "../../images/img2.png";
import styles from "./Thanks.module.css";

function Thanks(props) {
  return (
    <div className={styles.thankscontainer}>
      <img src={logo} className={styles.resultLogo} />
      <div className={styles.result}>You selected {props.result} out of 5</div>
      <p className={styles.thanks}>Thank You!</p>
      <div className={styles.feedback}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </div>
    </div>
  );
}

export default Thanks;
