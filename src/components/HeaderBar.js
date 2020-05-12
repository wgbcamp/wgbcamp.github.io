import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/fonts.css';



const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Raleway',
    fontSize: 30,
    fontWeight: 700
  },
  textLink: {
    color: 'inherit',
    textDecoration: 'inherit',
    margin: 20,
    fontFamily: 'Raleway',
    fontWeight: 900
},
})); 



export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >

      <AppBar >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={handleMenu} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Warren Brown
          </Typography>
          {auth && (


            <div>

<div>
<Link to="#home" variant="h6" className={classes.textLink}>
Home
</Link>
<Link to="#skills" variant="h6" className={classes.textLink}>
Skills
</Link>
<Link to="#portfolio" variant="h6" className={classes.textLink}>
Portfolio
</Link>
<Link to="#contact" variant="h6" className={classes.textLink}>
Contact
</Link>
</div>

              <Menu 
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="#home" variant="h6" className={classes.textLink}>Home Page</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="#skills" variant="h6" className={classes.textLink}>Skills</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="#portfolio" variant="h6" className={classes.textLink}>Portfolio</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="#contact" variant="h6" className={classes.textLink}>Contact</Link></MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
