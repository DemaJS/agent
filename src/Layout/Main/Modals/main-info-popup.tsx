import { useState } from "react";
import { Popup } from "../../../Components/Modal/popup";
import { Input } from "../../../UI-kit/Input";

type PropsType = {
  fullName: string;
  contract?: string;
  contractDate?: string;
  form: string;
};

export const MainInfoPopup = ({
  fullName,
  contract,
  contractDate,
  form,
}: PropsType) => {
  const [main, setMain] = useState<PropsType>({
    fullName,
    contract,
    contractDate,
    form,
  });

  return (
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
        placeholder="Дата заключения"
        value={main.contractDate}
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
    </Popup>
  );
};
