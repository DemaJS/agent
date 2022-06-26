import { CloseIcon } from "../../svg/Close";

type PropsType = {
  src: string;
  name: string;
  callback: (name: string) => void;
};

export const ImgComponent = ({ src, name, callback }: PropsType) => {
  return (
    <div className="image">
      <img alt="photos" src={src} />
      <div className="close-icon" onClick={() => callback(name)}>
        <CloseIcon />
      </div>
      <span>{name}</span>
      {/* <span>11 июня 2018</span> */}
    </div>
  );
};
