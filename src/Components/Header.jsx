import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <NavLink
        className={(a) => (a.isActive ? style.activeItem : style.item)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(a) => (a.isActive ? style.activeItem : style.item)}
        to="OurStory"
      >
        Our Story
      </NavLink>
      <NavLink
        className={(a) => (a.isActive ? style.activeItem : style.item)}
        to="Gallery"
      >
        Gallery
      </NavLink>
    </div>
  );
};

export default Header;
