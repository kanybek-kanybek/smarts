import React from "react";
import { Link } from "react-router-dom";
import "..//home/homeReview.css";
function HomeReview() {
    return (
        <section>
            <div className="container">
                <div className="review__content">
                    <div className="review__content__title">
                        <h1>Обзоры</h1>
                        <Link className="review__content__title-link" to={""}>
                            К обзорам
                        </Link>
                    </div>
                    <div className="review__content__products">
                        <div className="review__content__product">
                            <img
                                className="review__content__product-img"
                                src=""
                                alt=""
                            />
                            <div className="product">
                                <h3 className="review__content__product-title">
                                    Обзор устаревших смартфонов
                                </h3>
                                <p className="review__content__product-text">
                                    Lorem ipsum dolor sit amet consectetur.
                                    <br />
                                    Rhoncus risus viverra enim nunc.
                                </p>
                                <Link
                                    to={"/"}
                                    className="review__content__product-btn"
                                >
                                    смотреть
                                </Link>
                            </div>
                        </div>
                        <div className="review__content__product">
                            <img
                                className="review__content__product-img"
                                src=""
                                alt=""
                            />
                            <h3 className="review__content__product-title">
                                Обзор устаревших смартфонов
                            </h3>
                            <p className="review__content__product-text">
                                Lorem ipsum dolor sit amet consectetur.
                                <br />
                                Rhoncus risus viverra enim nunc.
                            </p>
                            <Link
                                to={"/"}
                                className="review__content__product-btn"
                            >
                                смотреть
                            </Link>
                        </div>
                        <div className="review__content__product">
                            <img
                                className="review__content__product-img"
                                src=""
                                alt=""
                            />
                            <h3 className="review__content__product-title">
                                Обзор устаревших смартфонов
                            </h3>
                            <p className="review__content__product-text">
                                Lorem ipsum dolor sit amet consectetur.
                                <br />
                                Rhoncus risus viverra enim nunc.
                            </p>
                            <Link
                                to={"/"}
                                className="review__content__product-btn"
                            >
                                смотреть
                            </Link>
                        </div>
                        <div className="review__content__product">
                            <img
                                className="review__content__product-img"
                                src=""
                                alt=""
                            />
                            <h3 className="review__content__product-title">
                                Обзор устаревших смартфонов
                            </h3>
                            <p className="review__content__product-text">
                                Lorem ipsum dolor sit amet consectetur.
                                <br />
                                Rhoncus risus viverra enim nunc.
                            </p>
                            <Link
                                to={"/"}
                                className="review__content__product-btn"
                            >
                                смотреть
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeReview;
