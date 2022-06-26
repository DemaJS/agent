import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrganization } from "../../BLL/Actions/organization-actions";
import { AppDispatch, RootState } from "../../BLL/configurate-store";
import { Button } from "../../UI-kit/Button";
import { convertDate } from "../../Utils/convert-date";
import { Header } from "./header";
import { ImgComponent } from "./img-component";
import "./main.css";
import { ContactsPopup } from "./Modals/contacts-popup";
import { MainInfoPopup } from "./Modals/main-info-popup";

export const Content = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loadInfo = async () => {
    await dispatch(getOrganization());
  };

  useEffect(() => {
    loadInfo();
  }, []);

  const organization = useSelector(
    (store: RootState) => store.organizations.organization.data
  );
  const isLoading = useSelector(
    (store: RootState) => store.organizations.organization.loading
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <Header />
      <div className="content__container">
        <div className="content__info-block">
          <div className="content__title">
            ОБЩАЯ ИНФОРМАЦИЯ
            <MainInfoPopup
              fullName={organization.name}
              contract={organization.contract?.no}
              contractDate={convertDate(organization.contract?.issue_date)}
              form={organization.businessEntity}
            />
          </div>
          <div className="content__description">
            <ul>
              <li>Полное название:</li>
              <li>Договор:</li>
              <li>Форма:</li>
              <li>Тип:</li>
            </ul>
            <ul className="descripton-data">
              <li>{organization.name}</li>
              <li>
                {organization.contract?.no} от{" "}
                {convertDate(organization.contract?.issue_date)}
              </li>
              <li>{organization.businessEntity}</li>
              <li>{organization.type?.join(", ").toUpperCase()}</li>
            </ul>
          </div>
        </div>
        <div className="content__info-block">
          <div className="content__title">
            КОНТАКТНЫЕ ДАННЫЕ
            <ContactsPopup />
          </div>
          <div className="content__description">
            <ul>
              <li>ФИО:</li>
              <li>Телефон:</li>
              <li>Эл. почта:</li>
            </ul>
            <ul className="descripton-data">
              <li>Григорьев Сергей Петрович</li>
              <li>+7 (916) 216-55-88</li>
              <li>grigoriev@funeral.com</li>
            </ul>
          </div>
        </div>
        <div className="content__info-block">
          <div className="content__title">ПРИЛОЖЕННЫЕ ФОТО</div>
          <div className="img-block">
            {organization.photos &&
              organization.photos.map((el) => {
                return <ImgComponent src={el.thumbpath} name={el.name} />;
              })}
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};
