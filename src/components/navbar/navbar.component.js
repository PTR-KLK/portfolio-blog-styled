import React, { useState } from "react";
import {
  NavContainer,
  NavImage,
  NavTitle,
  NavMenu,
  NavMenuItem,
  NavMenuBtn,
} from "./navbar.style";
import Me from "../../resources/me.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const onVisibilityChange = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <NavContainer>
      <NavImage src={Me} alt="Me" />
      <NavTitle>Site Title</NavTitle>

      <NavMenuBtn onClick={onVisibilityChange}>
        <FontAwesomeIcon size="2x" icon={faBars} color="#fff" />
      </NavMenuBtn>
      <NavMenu isVisible={menuVisible}>
        <NavMenuItem onClick={onVisibilityChange} to="/">
          About
        </NavMenuItem>
        <NavMenuItem onClick={onVisibilityChange} to="/projects">
          Projects
        </NavMenuItem>
      </NavMenu>
    </NavContainer>
  );
}

export default Navbar;
