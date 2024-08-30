import React from "react";
import style from "./index.module.css"

function Layout({children}) {
  return <section className={style.layout}>{children}</section>;
}

export { Layout };
