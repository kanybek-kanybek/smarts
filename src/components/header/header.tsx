import React from "react";
import logotip from "../images/Logo-info.svg";
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
                            <div className="header__content__search__product">
                                <select
                                    className="header__content__search__product__select"
                                    value="каталог товаров"
                                >
                                    <option value="каталог товаров">
                                        каталог товаров
                                    </option>
                                    <option value="смартфон">смартфон</option>
                                </select>
                                <input
                                    className="header__content__search__product__input"
                                    type="text"
                                    placeholder="Поиск товаров"
                                />
                            </div>
                            <div className="header__content__btns">
                                <button className="header__content__btns-like">
                                    {/* <ion-icon name="heart-outline"></ion-icon> */}
                                    like
                                </button>
                                <button className="header__content__btns-compare">
                                    com
                                </button>
                                <button className="header__content__btns-sign">
                                    sign
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
