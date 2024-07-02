import styles from "./slider.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NextArrow = ({ onClick }) => {
  return (
    <div>
      <HiOutlineArrowNarrowRight
        className={styles.nextArrowContainer}
        onClick={onClick}
      />
    </div>
  );
};

export default NextArrow;
