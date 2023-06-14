import React from 'react';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import sidebarBackground from 'entities/assets/sidebar-background.jpg';

const sidebarTabsFlowers = [
  {
    title: 'Комнатные растения',
    render: () => (<LocalFloristIcon color="success" />),
  },
  {
    title: 'Садовые растения',
    render: () => (<LocalFloristIcon color="success" />),
  },
  {
    title: 'Семена, грунты',
    render: () => (<LocalFloristIcon color="success" />),
  },
];

const sidebarTabsTools = [
  {
    title: 'Удобрения',
    render: () => (<LocalFloristIcon color="primary" />),
  },
  {
    title: 'Садовый инвентарь',
    render: () => (<LocalFloristIcon color="primary" />),
  },
];

const styles = {
  boxContainer: {
    backgroundImage: `url(${sidebarBackground})`,
    backgroundSize: 'cover',
    height: '100vh',
    color: '#f5f5f5',
  },
};
export const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const toggleDrawer = (open) => (event) => {
    if (
      event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsSidebarOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 400 }}
      style={styles.boxContainer}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sidebarTabsFlowers.map((tab) => (
          <ListItem key={tab.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {tab.render()}
              </ListItemIcon>
              <ListItemText primary={tab.title} sx={{ color: 'black' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sidebarTabsTools.map((tab) => (
          <ListItem key={tab.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {tab.render()}
              </ListItemIcon>
              <ListItemText primary={tab.title} sx={{ color: 'black' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        open={isSidebarOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

