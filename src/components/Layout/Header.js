import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useLocation, useNavigation } from "react-router-dom";

import styles from "./Header.module.scss";
import HeaderButton from "../UI/HeaderButton";
import { mainActions } from "../../store/main-slice";

const Header = () => {
  const [username, setUsername] = useState("Anonymous user");
  const userInfo = useSelector((state) => state.user);
  const isUserLoggedIn = userInfo && userInfo.googleCredential;
  const isHeaderActive = useSelector((state) => state.main.isHeaderActive);
  const currentUrl = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserLoggedIn) {
      setUsername(
        userInfo.googleCredential.name ?? userInfo.googleCredential.email
      );
    }
  }, [userInfo, isUserLoggedIn]);

  useEffect(() => {
    dispatch(mainActions.toggleHeader(false));
  }, [currentUrl]);

  const navlinkClass = ({ isActive, isPending }) =>
    isActive ? styles.active : isPending ? styles.pending : "";

  const headerClass = `${styles.header} ${isHeaderActive && styles.active}`;

  return (
    <Fragment>
      <HeaderButton />
      <header className={headerClass}>
        <div className={styles["header__nav"]}>
          <NavLink to="/" className={navlinkClass}>
            Home
          </NavLink>
          <NavLink to="/to-do" className={navlinkClass}>
            To-Do
          </NavLink>
          <NavLink to="/hang-man" className={navlinkClass}>
            Hang Man
          </NavLink>
        </div>
        <div className={styles["header__user-info"]}>
          <span>{username}</span>
          {isUserLoggedIn && <Link to="/logout">Log Out</Link>}
          {!isUserLoggedIn && <Link to="/login">Log In</Link>}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
