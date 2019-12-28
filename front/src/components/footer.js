import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 280,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container style={{backgroundColor:"#FF5555", color:"#FAFAFA"}}>
        <Grid container style={{width:"90%", margin:"auto"}}>
            <Grid xs={4} style={{marginTop:"50px", marginBottom:"50px"}}>
                <Typography><ConfirmationNumberIcon />
            <Typography variant="h6">
              Karcis
            </Typography></Typography>
                <Typography>KARCIS - is a web-based platform that provides tickets for various events around sports, music, science and programming</Typography>
            </Grid>
            <Grid xs={4} style={{marginTop:"50px", marginBottom:"50px"}}>
                <Typography></Typography>
                <Typography></Typography>
            </Grid>
            <Grid xs={4} style={{marginTop:"50px", marginBottom:"50px"}}>
                <Typography></Typography>
                <Typography></Typography> 
            </Grid>
            <Grid xs={12}>
                <Box borderTop={1} style={{borderColor :"#BAB091", marginBottom:"25px"}}/>          
            </Grid>
            <Grid xs={10} style={{marginBottom:"25px"}}>
                
            </Grid>
            <Grid xs={2} style={{marginBottom:"25px"}}>
                <Typography>
                    <Button href="#">About</Button>
                    <Button href="#">Help</Button>
                    <Button href="#">Legal</Button>
                </Typography>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}