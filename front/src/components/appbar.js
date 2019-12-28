import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginRegister from '../components/loginregister'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Button from '@material-ui/core/Button';
import Dropdown from '../components/dropdown'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBarHome() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static" style={{background: '#FF5555'}}>
        <Toolbar style={{width:"90%", margin:"auto"}}>
          <Button edge="start" className={classes.menuButton} color="inherit" aria-label="menu" style={{marginRight:"90%"}}>
            <ConfirmationNumberIcon />
            <Typography variant="h6">
              Karcis
            </Typography>
          </Button>
          
          
          
            {auth ? (
              <Dropdown />
            ) : (
              <LoginRegister/>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}