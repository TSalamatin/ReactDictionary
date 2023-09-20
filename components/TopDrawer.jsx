import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import { Navigate, useNavigate } from 'react-router';
import { useEffect, useState } from 'react'; 
import DictionarySelect from '../components/DictionarySelect';




export default function SwipeableTemporaryDrawer() {



   const navigate = useNavigate()

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <DictionarySelect />
      </List>
    </Box>
  );

  return (
    <div>
     
        <React.Fragment key='top'>
          <Button onClick={toggleDrawer('top', true)}>Dictionary Select</Button>
          <SwipeableDrawer
            anchor='top'
            open={state['top']}
            onClose={toggleDrawer('top', false)}
            onOpen={toggleDrawer('top', true)}
          >
            {list('top')}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
