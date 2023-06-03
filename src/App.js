import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter} from 'react-pro-sidebar';

function App() {
  return (
    <ProSidebar onToggle={false} >
      < Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
    <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
  <SidebarFooter>
    <MenuItem >Git</MenuItem>
  </SidebarFooter>
    </ProSidebar>
  );
}

export default App;
