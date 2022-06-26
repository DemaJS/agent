import { useState } from "react";
import { useDispatch } from "react-redux";
import { patchOrganization } from "../../../BLL/Actions/organization-actions";
import { AppDispatch } from "../../../BLL/configurate-store";
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
  const dispatch = useDispatch<AppDispatch>();
  const [main, setMain] = useState<PropsType>({
    fullName,
    contract,
    contractDate,
    form,
  });

  const saveForm = () => {
    const payload = {
      name: main.fullName,
      businessEntity: main.form,
    };
    dispatch(patchOrganization(payload));
  };

  return (
    <Popup title="Редактирование" action="СОХРАНИТЬ" callback={saveForm}>
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
      {/* <Input
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
      /> */}
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
