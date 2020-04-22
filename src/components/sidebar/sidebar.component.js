import React from "react";
import { Navigation, Menu, MenuItem, Header, Title } from "./sidebar.style";


function Sidebar() {
  return (
    <Navigation>
      <Header>
        <Title>
          <h2>PTR</h2>
          <h2>KLK</h2>
        </Title>
        <Menu>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Tagi</MenuItem>
          <MenuItem>Projekty</MenuItem>
          <MenuItem>O mnie</MenuItem>
        </Menu>
      </Header>
    </Navigation>
  );
}

export default Sidebar;
