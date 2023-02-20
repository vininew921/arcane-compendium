import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const drawerWidth = 264;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

type ItemProps = {
  title: string;
  redirectTo: string;
  icon: any;
  open: boolean;
};

const DrawerItem = (itemProps: ItemProps) => {
  return (
    <ListItem key='personagens' disablePadding sx={{ display: 'block' }}>
      <Tooltip
        title={itemProps.title}
        arrow
        placement='right'
        disableInteractive
        disableHoverListener={itemProps.open}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: itemProps.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: itemProps.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {itemProps.icon}
          </ListItemIcon>
          <ListItemText primary={itemProps.title} sx={{ opacity: itemProps.open ? 1 : 0 }} />
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
};

type Props = {
  children: React.ReactNode;
};

const MiniDrawer = ({ children }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (openState: boolean) => {
    setOpen(openState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader style={{ padding: 12 }}>
          <Typography
            display={open ? 'block' : 'none'}
            textAlign='left'
            paddingLeft={1.5}
            className='w-full'
            fontWeight='bolder'
          >
            Menu
          </Typography>
          <IconButton onClick={() => handleDrawerOpen(!open)}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <DrawerItem
            title='Personagens'
            icon={<ContactPageRoundedIcon />}
            open={open}
            redirectTo='/home'
          />
          <DrawerItem
            title='Feitiços'
            icon={<AutoFixHighRoundedIcon />}
            open={open}
            redirectTo='/home'
          />
          <DrawerItem
            title='Talentos'
            icon={<AutoAwesomeRoundedIcon />}
            open={open}
            redirectTo='/home'
          />
          <DrawerItem
            title='Idiomas'
            icon={<TranslateRoundedIcon />}
            open={open}
            redirectTo='/home'
          />
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default MiniDrawer;
