import React from "react";
import { Navigation, Menu, MenuItem, Header, Title, Image, SidebarFooter } from "./sidebar.style";
import Me from "../../resources/me.png"


function Sidebar() {
  return (
    <Navigation>
      <Header>
        <Image src={Me} alt="Me"/>
        <Title>
          <h2>PTR</h2>
          <h2>KLK</h2>
        </Title>
        
      </Header>

      <Menu>
        <MenuItem to="/">About</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/blog">Articles</MenuItem>
      </Menu>

      <SidebarFooter>
        2020 PTR-KLK
      </SidebarFooter>
    </Navigation>
  );
}

export default Sidebar;
