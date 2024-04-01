import React from "react";
import logotip from "../images/header__logo.png";
import "../header/header.css";

function Header() {
    return (
        <>
            <div className="wrap">
                <div className="header">
                    <div className="container">
                        <div className="header__content">
                            <div className="header__content__logo">
                                <img src={logotip} alt="" />
                            </div>
                            <div className="header__content__search-product">
                                <select value="каталог товаров">
                                    <option value="каталог товаров">
                                        каталог товаров
                                    </option>
                                    <option value="смартфон">смартфон</option>
                                </select>
                                <input type="text" />
                            </div>
                            <div className="header__content__btns">
                                <button className="header__content__btns-like">
                                    like
                                </button>
                                <button className="header__content__btns-compare">
                                    compare
                                </button>
                                <button className="header__content__btns-sign">
                                    sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
