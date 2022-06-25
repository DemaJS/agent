import { useState } from "react";
import { Popup } from "../../Components/Modal/popup";
import { CloseIcon } from "../../svg/Close";
import { Button } from "../../UI-kit/Button";
import { Input } from "../../UI-kit/Input";
import { Contacts } from "./contacts";
import { Header } from "./header";
import { MainInfo } from "./main-info";
import "./main.css";

export const Content = () => {
  const [main, setMain] = useState({
    fullName: "aaa",
    contract: "",
    form: "",
    type: "",
  });
  const [contacts, setContacts] = useState({
    fullName: "",
    phone: "",
    mail: "",
  });

  return (
    <div className="content">
      <Header />
      <div className="content__container">
        <div className="content__info-block">
          <div className="content__title">
            ОБЩАЯ ИНФОРМАЦИЯ
            <Popup title="Редактирование" action="СОХРАНИТЬ">
              <Input
                placeholder="Полное название"
                value={main.fullName}
                onChangeHandler={(e) => {
                  setMain((prev) => ({
                    ...prev,
                    fullName: e,
                  }));
                }}
              />
              <Input
                placeholder="Договор"
                value={main.contract}
                onChangeHandler={(e) => {
                  setMain((prev) => ({
                    ...prev,
                    contract: e,
                  }));
                }}
              />
              <Input
                placeholder="Форма"
                value={main.form}
                onChangeHandler={(e) => {
                  setMain((prev) => ({
                    ...prev,
                    form: e,
                  }));
                }}
              />
              <Input
                placeholder="Тип"
                value={main.type}
                onChangeHandler={(e) => {
                  setMain((prev) => ({
                    ...prev,
                    type: e,
                  }));
                }}
              />
            </Popup>
          </div>
          <MainInfo />
        </div>
        <div className="content__info-block">
          <div className="content__title">
            КОНТАКТНЫЕ ДАННЫЕ
            <Popup title="Редактирование" action="СОХРАНИТЬ">
              <Input
                placeholder="ФИО"
                value={contacts.fullName}
                onChangeHandler={(e) => {
                  setContacts((prev) => ({
                    ...prev,
                    fullName: e,
                  }));
                }}
              />
              <Input
                placeholder="Телефон"
                value={contacts.phone}
                onChangeHandler={(e) => {
                  setContacts((prev) => ({
                    ...prev,
                    phone: e,
                  }));
                }}
              />
              <Input
                placeholder="Эл. почта"
                value={contacts.mail}
                onChangeHandler={(e) => {
                  setContacts((prev) => ({
                    ...prev,
                    mail: e,
                  }));
                }}
              />
            </Popup>
          </div>
          <Contacts />
        </div>
        <div className="content__info-block">
          <div className="content__title">ПРИЛОЖЕННЫЕ ФОТО</div>
          <div className="img-block">
            <div className="image">
              <img alt="photos" />
              <div className="close-icon">
                <CloseIcon />
              </div>
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
