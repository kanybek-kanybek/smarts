import React from "react";
import bannerBig from "../images/Banner__big.svg";
import bannerSmall from "../images/Banner-Small.png";

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__content__buner">
                            <div className="hero__content__buner-big">
                                <img src={bannerBig} alt="" />
                            </div>
                            <div className="hero__content__buner-small">
                                <img src={bannerSmall} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
