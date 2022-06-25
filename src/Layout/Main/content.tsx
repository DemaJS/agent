import { EditIcon } from "../../svg/Edit";
import { Button } from "../../UI-kit/Button";
import { Header } from "./header";
import "./main.css";

export const Content = () => {
  return (
    <div className="content">
      <Header />
      <div className="content__container">
        <div className="content__info-block">
          <div className="content__title">
            ОБЩАЯ ИНФОРМАЦИЯ
            <EditIcon />
          </div>
          <div className="content__description">
            <ul>
              <li>Полное название:</li>
              <li>Договор:</li>
              <li>Форма:</li>
              <li>Тип:</li>
            </ul>
            <ul className="descripton-data">
              <li>ООО Фирма “Перспективные захоронения”</li>
              <li>12345 от 12.03.2015</li>
              <li>ООО</li>
              <li>Агент, Подрядчик</li>
            </ul>
          </div>
        </div>
        <div className="content__info-block">
          <div className="content__title">
            КОНТАКТНЫЕ ДАННЫЕ
            <EditIcon />
          </div>
          <div className="content__description">
            <ul>
              <li>ФИО:</li>
              <li>Телефон:</li>
              <li>Эл. почта:</li>
            </ul>
            <ul className="descripton-data">
              <li>ООО Фирма “Перспективные захоронения”</li>
              <li>12345 от 12.03.2015</li>
              <li>ООО</li>
            </ul>
          </div>
        </div>
        <div className="content__info-block">
          <div className="content__title">ПРИЛОЖЕННЫЕ ФОТО</div>
          <div className="img-block">
            <div className="image">
              <img alt="photos" />
              <span>Надгробный камень.jpg</span>
              <span>11 июня 2018</span>
            </div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};
