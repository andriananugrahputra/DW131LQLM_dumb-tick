import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import {connect} from 'react-redux';
import {getEvents} from '../_actions/events';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class eventsToday extends Component {
    componentDidMount(){
        this.props.getEvents();
    }
    render(){
        const { data, isLoading, error} = this.props.events;
        console.log(data)
        return (
            <div>
                
                <Typography variant="h2">Today</Typography>
                <Grid container direction="row">
                {data.map((entry,index) => {
                    return (
                        <div>
                          <Card key={index} style={{width: "345px", height:"300px", margin:"auto", marginTop:"10px", marginLeft:"10px"}}> 
                          <CardActionArea>
                            <CardMedia 
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={entry.image}/> 
                          </CardActionArea>
                          <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                          {entry.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          {entry.description}
                          </Typography>
                        </CardContent> 
                          </Card>
                            {/* <Button key={index}> {entry.title} {entry.title} </Button> */}
                        </div>
                    );
                })}
                </Grid>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
      //get state.categories from store categories
      events: state.events
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return{
      //get getCategories from _actions categories
      getEvents: () => {
        dispatch(getEvents())
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(eventsToday);