import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
// import Cart from "../Cart/Cart";
// import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  return (
    <>
      <header className="main-header">
        {/* className={`main-header ${scrolled? 'sticky-header': ''}`} */}
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">Happify Events</div>
          <div className="right">
            <TbSearch onClick={handleSearchClick} />
            <AiOutlineHeart />
            <span className="cart-icon">
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showSearch && <Search />}
    </>
  );
};

export default Header;
