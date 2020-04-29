import React from "react";
import { Navigation, Menu, MenuItem, Header, Title, Image } from "./sidebar.style";
import Me from "../../resources/me.png"


function Sidebar() {
  return (
    <Navigation>
      <Header>
        <Image src={Me} alt="Me"/>
        <Title>
          <h2>Site</h2>
          <h2>Title</h2>
        </Title>
        <Menu>
          <MenuItem to="/">About</MenuItem>
          <MenuItem to="/projects">Projects</MenuItem>
          <MenuItem to="/blog">Articles</MenuItem>
        </Menu>
      </Header>
    </Navigation>
  );
}

export default Sidebar;
