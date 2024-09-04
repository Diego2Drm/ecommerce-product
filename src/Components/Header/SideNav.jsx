import style from "./Header.module.css";
import iconClose from "../../assets/Icons/icon-close.svg";

function SideNav({ open, setOpen }) {
  return (
    <aside className={open ? style.asideNav : style.close}>
      <nav className={style.nav}>
        <img className={style.iconClose} src={iconClose} alt="close" onClick={() => setOpen(!open)} />
        <ul className={style.list}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </aside>
  );
}

export { SideNav };
