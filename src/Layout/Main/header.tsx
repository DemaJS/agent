import { useDispatch } from "react-redux";
import { deleteOrganization } from "../../BLL/Actions/organization-actions";
import { AppDispatch } from "../../BLL/configurate-store";
import { Popup } from "../../Components/Modal/popup";
import { BackIcon } from "../../svg/Back";
import { RotationIcon } from "../../svg/Rotation";
import { LinkIcon } from "../../svg/Vector";

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const deleteOraganization = () => {
    dispatch(deleteOrganization());
  };

  return (
    <div className="header">
      <div className="go-back">
        <BackIcon />К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
      </div>
      <div className="header__links">
        <LinkIcon />
        <RotationIcon />
        <Popup
          title="Удалить карточку"
          type="delete"
          action="УДАЛИТЬ"
          callback={deleteOraganization}
        >
          Отправить карточку организации в архив?
        </Popup>
      </div>
    </div>
  );
};
