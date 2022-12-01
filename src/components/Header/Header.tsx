import { ReactElement } from "react";
import "./styles.sass";

const Header = (): ReactElement => {
  return (
    <header>
      <div className="center header-inner">
        <div className="logo">
          <img src="/images/riot-games-logo.svg" alt="" />
          <img src="/images/valorant-logo.svg" alt="" />
        </div>
        <nav>
          <ul>
            <li>Game</li>
            <li>Champions</li>
            <li>News</li>
            <li>Patch Notes</li>
            <li>Discover</li>
            <li>Esports</li>
            <li>Universe</li>
            <li>Shop</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className="profile">
          <img src="/images/profile-icon.png" alt="" />
          <span>Unepickid</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
