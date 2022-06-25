import { BuildingIcon } from "../../svg/Building";
import { ChatIcon } from "../../svg/Chat";
import { ExitIcon } from "../../svg/Exit";
import { HomeIcon } from "../../svg/Home";
import { MarketIcon } from "../../svg/Market";
import { SearchIcon } from "../../svg/Search";
import { SettingsIcon } from "../../svg/Settings";

import "./menu.css";

export const Menu = () => {
  return (
    <div className="menu-wpapper">
      <div className="menu">
        <div className="top">
          <HomeIcon />
          <MarketIcon />
          <SearchIcon />
        </div>
        <div className="bottom">
          <SettingsIcon />
          <ChatIcon />
          <ExitIcon />
        </div>
      </div>
      <div className="sub-menu">
        <div className="title">
          <span>ЧЕСТНЫЙ АГЕНТ</span>
          <span>МЕНЕДЖЕР ПРОЦЕССА</span>
        </div>
        <div className="sub-menu__link">
          <BuildingIcon />
          Организации
        </div>
      </div>
    </div>
  );
};
