import React from 'react'
import {AuthUserContext} from './session'
import { makeStyles} from '@material-ui/core/styles';
import {Drawer, CssBaseline, AppBar, Toolbar, List,Typography,Link,Divider,IconButton,ListItem,ListItemText,Hidden} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SignOutButton from './userAuth/SignOutPage';
import {uuid} from 'uuidv4'

const drawerWidth ="100%";


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolist:{
    textAlign:"center"
  }
}));

export default function Navbar(props) {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List className={classes.toolist}>
        {['Home','Profile', 'My Wall/list', 'Opportunities', 'Organisations','Social Wall','Inbox'].map((text, index) => (
          <Link underline="none" href={`/${text.toLowerCase().replace(/\s/g, '')}`} >
          <ListItem button key={text.toUpperCase()} style={{textAlign:"center"}}>
              <ListItemText key={uuid()} primary={text} />
          </ListItem>
          
          </Link>
        ))}
            <SignOutButton text="Sign Out" />
      </List>
    </div>
  );

    return(
      <AuthUserContext.Consumer>
          {authUser =>authUser&&
          <>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini Interface
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
    </div>
    </> 
    }
    </AuthUserContext.Consumer>
    )
}
