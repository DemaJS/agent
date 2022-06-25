import { AddIcon } from "../svg/Add";
import "./button.css";

export const Button = () => {
  return (
    <div className="btn-container">
      <input type="file" id="upload" hidden />
      <label htmlFor="upload">
        <AddIcon />
        ДОБАВИТЬ ИЗОБРАЖЕНИЕ
      </label>
    </div>
  );
};
