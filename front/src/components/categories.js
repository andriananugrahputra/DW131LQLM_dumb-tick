import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import {connect} from 'react-redux';
import {getCategories} from '../_actions/categories'
import Box from '@material-ui/core/Box';

class categories extends Component {
  componentDidMount(){
    this.props.getCategories();
}
render(){
    const { data, isLoading, error} = this.props.categories;
    console.log(data)
    return (
        <div>
          <Typography variant="h2">Categories</Typography>
          <Grid container direction="row">
            
            {data.map((entry,index) => {
                return (
                    <div>
                      <Box display="flex" justifyContent="center" item m={1} p={1}>
                        <Box>
                        <Button key={index}>{entry.name}</Button>
                        </Box>
                        
                          
                        
                      </Box>
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
      categories: state.categories
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return{
      //get getCategories from _actions categories
      getCategories: () => {
        dispatch(getCategories())
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(categories);