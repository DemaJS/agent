import { useState } from "react";
import popupStyles from "./popup.module.css";
import { EditIcon } from "../../svg/Edit";
import { TrashIcon } from "../../svg/Trash";

type PropsType = {
  title: string;
  children?: React.ReactNode;
  action?: string;
  callback?: () => void;
  type?: "delete" | "edit";
};

export const Popup = ({
  title,
  children,
  action,
  callback,
  type,
}: PropsType) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
  };

  if (!show) {
    return (
      <div onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
        {type === "delete" ? <TrashIcon /> : <EditIcon />}
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
          <button onClick={callback}>{action}</button>
          <button onClick={closeHandler}>ОТМЕНА</button>
        </div>
      </div>
    </div>
  );
};
