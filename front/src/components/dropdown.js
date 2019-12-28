import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          aria-label="account of current user"
          color="inherit"
        >
          <FaceIcon/>
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper keepMounted>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>
                        <AccountCircleIcon style={{marginRight:"10px"}}/>
                        Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ConfirmationNumberIcon style={{marginRight:"10px"}}/>
                        My Ticket
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <MonetizationOnIcon style={{marginRight:"10px"}}/>
                        Payment
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <EventNoteIcon style={{marginRight:"10px"}}/>
                        Add Event
                    </MenuItem>
                    <hr></hr>
                    <MenuItem onClick={handleClose}>
                        <MeetingRoomIcon style={{marginRight:"10px"}}/>
                        Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}