import { BackIcon } from "../../svg/Back";
import { RotationIcon } from "../../svg/Rotation";
import { TrashIcon } from "../../svg/Trash";
import { LinkIcon } from "../../svg/Vector";

export const Header = () => {
  return (
    <div className="header">
      <div className="go-back">
        <BackIcon />К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
      </div>
      <div className="header__links">
        <LinkIcon />
        <RotationIcon />
        <TrashIcon />
      </div>
    </div>
  );
};
