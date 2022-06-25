import { useState } from "react";
import popupStyles from "./popup.module.css";
import { EditIcon } from "../../svg/Edit";

type PropsType = {
  title: string;
  children?: React.ReactNode;
  action?: string;
};

export const Popup = ({ title, children, action }: PropsType) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
  };

  if (!show) {
    return (
      <div onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
        <EditIcon />
      </div>
    );
  }
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h2>{title}</h2>
        <div className={popupStyles.content}>{children}</div>
        <div className={popupStyles.actions}>
          <button>{action}</button>
          <button onClick={closeHandler}>ОТМЕНА</button>
        </div>
      </div>
    </div>
  );
};
