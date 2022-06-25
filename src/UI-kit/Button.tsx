import { AddIcon } from "../svg/Add";
import "./style.css";

export const Button = () => {
  return (
    <>
      <input type="file" id="upload" hidden />
      <label htmlFor="upload">
        <AddIcon />
        ДОБАВИТЬ ИЗОБРАЖЕНИЕ
      </label>
    </>
  );
};
