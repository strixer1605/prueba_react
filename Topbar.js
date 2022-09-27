// import { Button } from '@mui/material'
// import React from 'react'

// function Topbar() {
//   return (
//     <div style={{width: '100%', color: 'olive', height: '60px'}}>
//         <Button />
//     </div>
//   )
// }

// export default Topbar

import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { Inbox, Mail, Trash, Menu, Home, Feather, Briefcase, User } from 'react-feather';
import zIndex from '@mui/material/styles/zIndex';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        {
            title: 'Home',
            icon: <Home />
        }, 
        {
            title: 'Features',
            icon: <Feather />
        }, 
        {
            title: 'Pricing',
            icon: <Briefcase />
        }, 
        {
            title: 'Catalogo',
            icon: <Trash />
        },
        {
            title: 'Perfil',
            icon:  <User />
        }
    ];

    const toggleDrawer = (event) => {
        console.log(event);
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            setIsOpen(false)
            return;
        }

        setIsOpen(true);
    };

    const list = () => (
        <Box
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {menuItems.map((item, index) => (
                // <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                // </ListItem>
                ))}
            </List>
            {/* <Divider /> */}
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {
                            index % 2 === 0 
                            ? <Inbox /> 
                            : ( index === 1
                                ? <Trash /> 
                                : <Inbox />
                            )
                            }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List> */}
        </Box>
    );



    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);


}

    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer}><Menu color='olive' /></Button>
                <Drawer
                    anchor={'left'}
                    open={isOpen}
                    onClose={(e) => { e.preventDefault(); setIsOpen(false)}}
                >
                    {list()}
                </Drawer>
            
    
                <Box sx={{ width: 500 }}>
                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                        {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                            </Paper>
                        </Fade>
                        )}
                    </Popper>
                    <Grid container justifyContent="center">
                        <Grid item container xs={6} alignItems="flex-end" direction="column">
                            <Grid item>
                                <Button onClick={handleClick('right')}>right</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
        </div>
    );
}

    
    
