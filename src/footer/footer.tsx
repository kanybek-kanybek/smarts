import behoofLogo from "../images/behoof_logo.png";
import VK from "../images/Group 90.png";
import TG from "../images/TG.png";
import INST from "../images/Inst.png";
import TikTok from "../images/Vector.png";
import YT from "../images/YT.png";
import mainBtn from "../images/Frame 34015.png";
import catalog from "../images/Frame 34015 (1).png";
import favorite from "../images/Frame 34015 (2).png";
import comparisons from "../images/Frame 34015 (3).png";
import profile from "../images/Frame 34015 (4).png";
import "../footer/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__content">
          <div className="footer__content__logotip">
            <div className="footer__content__logotip-logo">
              <img
                src={behoofLogo}
                alt=""
                className="footer__content__logotip-svg"
              />
              <h1 className="footer__content__logotip-title">Behoof</h1>
            </div>
            <p>Мы в соц-сетях</p>
            <div className="footer__content__social">
              <img src={VK} alt="" className="footer__content__social-svgs" />
              <img
                src={TikTok}
                alt=""
                className="footer__content__social-svgs"
              />
              <img src={INST} alt="" className="footer__content__social-svgs" />
              <img src={TG} alt="" className="footer__content__social-svgs" />
              <img src={YT} alt="" className="footer__content__social-svgs" />
            </div>
          </div>
          <div className="footer__content__user">
            <h3 className="footer__content__user-title">Пользователю</h3>
            <h3 className="footer__content__user-text">Связаться с нами</h3>
            <h3 className="footer__content__user-text">
              Поддержка пользователей
            </h3>
            <h3 className="footer__content__user-text">FAQ & Руководства</h3>
            <h3 className="footer__content__user-text">
              Политика конфиденциальности
            </h3>
            <h3 className="footer__content__user-text">
              Пользовательское соглашение
            </h3>
          </div>
          <div className="footer__content__categories">
            <h3 className="footer__content__user-title">
              Популярные категории
            </h3>
            <h3 className="footer__content__user-text">Смартфоны</h3>
            <h3 className="footer__content__user-text"> Teteras electricas</h3>
            <h3 className="footer__content__user-text">Стиральные машины</h3>
            <h3 className="footer__content__user-text">Телевизоры</h3>
            <h3 className="footer__content__user-text">Ноутбуки</h3>
          </div>
          <div className="footer__content__categories aboutUs">
            <h3 className="footer__content__user-title">Команда Behoof</h3>
            <h3 className="footer__content__user-text">О нас</h3>
            <h3 className="footer__content__user-text"> Работа у нас</h3>
          </div>
        </div>
        <p className="footer__content__categories-rights">
          Copyright © 2023 Behoof, Inc. Все права защищены
        </p>
        <div className="footer__content__btns  ">
          <div className="buttons">
            <button className="header__content__btns-like">
              <img src={mainBtn} alt="" />
              Главная
            </button>
            <button className="header__content__btns-like">
              <img src={catalog} alt="" />
              Каталог
            </button>
            <button className="header__content__btns-like">
              <img src={favorite} alt="" />
              Избранное
            </button>
            <button className="header__content__btns-like">
              <img src={comparisons} alt="" />
              Сравнения
            </button>
            <button className="header__content__btns-like">
              <img src={profile} alt="" />
              Профиль
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
