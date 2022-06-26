import { useState } from "react";
import { Popup } from "../../../Components/Modal/popup";
import { Input } from "../../../UI-kit/Input";

export const ContactsPopup = () => {
  const [contacts, setContacts] = useState({
    fullName: "",
    phone: "",
    mail: "",
  });
  return (
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
  );
};
