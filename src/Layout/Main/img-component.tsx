import { CloseIcon } from "../../svg/Close";

type PropsType = {
  src: string;
  name: string;
};

export const ImgComponent = ({ src, name }: PropsType) => {
  return (
    <div className="image">
      <img alt="photos" src={src} />
      <div className="close-icon">
        <CloseIcon />
      </div>
      <span>{name}</span>
      {/* <span>11 июня 2018</span> */}
    </div>
  );
};
