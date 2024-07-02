import styles from "./slider.module.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const PrevArrow = ({ onClick }) => {
  return (
    <div>
      <HiOutlineArrowNarrowLeft
        className={styles.prevArrowContainer}
        onClick={onClick}
      />
    </div>
  );
};

export default PrevArrow;
