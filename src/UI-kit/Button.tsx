import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadPhoto } from "../BLL/Reducers/organizations";
import OrganizationService from "../Services/organization-service";
import { AddIcon } from "../svg/Add";
import "./button.css";

export const Button = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const dispatch = useDispatch();

  function handleChange(event: any) {
    setSelectedImage(event.target.files[0]);
  }

  async function uploadImg() {
    const formData = new FormData();
    formData.append("file", selectedImage!);
    formData.append("fileName", selectedImage!.name);
    const responce = await OrganizationService.uploadImg(formData);
    dispatch(uploadPhoto(responce.data));
    setSelectedImage(null);
  }

  return (
    <div className="upload-wrapper">
      <div className="btn-container">
        <input type="file" id="upload" hidden onChange={handleChange} />
        <label htmlFor="upload">
          <AddIcon />
          ДОБАВИТЬ ИЗОБРАЖЕНИЕ
        </label>
      </div>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"160px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={uploadImg}>Сохранить</button>
          <button onClick={() => setSelectedImage(null)}>Удалить</button>
        </div>
      )}
    </div>
  );
};
