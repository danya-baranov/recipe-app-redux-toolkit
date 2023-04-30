import React from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useFavourites } from "../../hooks/useFavourites";
import styles from "./Header.module.css";

const Header = ({}) => {
  const { favourites } = useFavourites();
  return (
    
    <header className={styles.header}>
      <BsFillBookmarkHeartFill />
      <span>{favourites.length}</span>
    </header>
  );
};

export default Header;
