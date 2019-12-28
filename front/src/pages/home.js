import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBarHome from '../components/appbar'
import Categories from '../components/categories'
import EventsToday from '../components/eventsToday'
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import {connect} from 'react-redux';
import {getCategories} from '../_actions/categories'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../components/footer';


export default class Home extends Component {
    render(){
        return (
            <div>
                <AppBarHome/>
                <Grid container style={{width:"80%", margin:"auto"}}>
                    <Grid xs={11}>
                        <TextField id="standard-basic" label="Search Event" InputProps={{ style: { fontSize: 20 } }} style={{marginTop:"5%", marginBottom:"5%"}} fullWidth />
                    </Grid>
                    <Grid xs={1} style={{marginTop:"7%"}}>
                        <SearchIcon/>
                    </Grid>
                    <Grid xs={12}>
                        <Categories/>
                    </Grid>
                    <Grid xs={12}>
                        <EventsToday/>
                    </Grid>
                    
                </Grid>
                <Grid xs={12} style={{marginTop:"50px"}}>
                    <Footer/>
                </Grid>
                
            </div>
            
        );
    }
}
//export default connect(mapStateToProps,mapDispatchToProps)(categories);