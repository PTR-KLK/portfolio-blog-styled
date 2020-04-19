import React from "react";
import { Navigation, Menu, MenuItem, Header, Title } from "./sidebar.style";

function Sidebar() {
  return (
    <Navigation>
      <Header>
        <Title>PTRKLK</Title>
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
