import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchUser } from '../../../../redux/user/actions';
import { Grid } from '../../../common';
import header from './header.json'
 class View extends Component {
    constructor(props){
        super(props)
        debugger
        this.state={
          
         
        }
    }
    UNSAFE_componentWillMount(){
       this.props.viewUser()
    }
  
  render() {
      console.log(this.props);
      console.log(this.state);
    return (
      <div className='box'>
      <Grid data={this.props.user.list} header={header.header} sorting/>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{

    return{
          user:state.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        viewUser: (e) => dispatch(fetchUser())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(View)