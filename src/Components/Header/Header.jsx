import { useContext, useState } from "react";
import style from "./Header.module.css";
import iconMenu from "../../assets/Icons/icon-menu.svg";
import logo from "../../assets/Icons/logo.svg";
import iconcart from "../../assets/Icons/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import { SideNav } from "./SideNav";
import { ModalCart } from "../ModalCart/ModalCart";
import { ShoppingShoesContext } from "../Context/Context";

function Header() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const context = useContext(ShoppingShoesContext);

  return (
    <header className={style.header}>
      <div className={style.divLogo}>
        <img src={iconMenu} alt="menu" onClick={() => setOpen(!open)} />
        <img src={logo} alt="logo" />
      </div>

      <div className={style.divAvatar}>
        <div className={style.containerCart}>
          <img
            src={iconcart}
            alt="cart"
            onClick={() => setOpenModal(!openModal)}
          />
          <p
            className={context.shoesCount == 0 ? style.none : style.shoesCount}
          >
            {context.shoesCount}
          </p>
        </div>
        <ModalCart openModal={openModal} />

        <img className={style.avatar} src={avatar} alt="avatar" />
      </div>

      <SideNav open={open} setOpen={setOpen} />
    </header>
  );
}

export { Header };
