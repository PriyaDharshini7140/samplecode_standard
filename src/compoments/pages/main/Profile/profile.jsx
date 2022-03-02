import React, { Component } from "react";
import { BootstrapButton, Label, Radio, Textbox } from "../../../common";
import { connect } from "react-redux";
import { addUser } from "../../../../redux/user/actions";
import {Link, Navigate} from 'react-router-dom'
 class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      email: "",
      phone: "",
      gender: "",
      error:""
    };
  }

validate=()=>{
  if (!this.state.name || !this.state.name.trim()) {
    this.setState({
      error: "name is required",
    });
    return false;
  }
 else if (!this.state.password || !this.state.password.trim()) {
    this.setState({
      error: "password is required",
    });
    return false;
  }
  else if (!this.state.email || !this.state.email.trim()) {
    this.setState({
      error: "email is required",
    });
    return false;
  }
  else if (!this.state.phone || !this.state.phone.trim()) {
    this.setState({
      error: "phone is required",
    });
    return false;
  }
  else if (!this.state.gender || !this.state.gender.trim()) {
    this.setState({
      error: "gender is required",
    });
    return false;
  }
  else{
    this.setState({
      error: "",
    });
    return true;
  }
}


  UNSAFE_componentWillMount(){
    this.setState({name:this.props.user.name,password:this.props.user.password})
}

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submit = () => {
    if (!this.validate()) {
     return
    }
    const data = {
      name:this.state.name,
      password:this.state.password,
      email:this.state.email,
      phone:this.state.phone,
      gender:this.state.gender
    }
     console.log(data);
     this.props.addUser(data)
    
  };

  render() {
      console.log(this.state);
      console.log(this.props);
    return (
      <div className="box">
        <Label id="name" message="name" />
        <Textbox
          id="name"
          name="name"
          type="text"
          value={this.state.name}
        />
        <Label id="password" message="password" />
        <Textbox
          id="password"
          name="password"
          type="password"
          value={this.state.password}
        />
        <Label id="email" message="email" />
        <Textbox
          id="email"
          name="email"
          type="text"
          onChange={this.handleInput}
        />
        <Label id="phone" message="phone" />
        <Textbox
          id="phone"
          name="phone"
          type="text"
          onChange={this.handleInput}
        />
        <Label id="gender" message="gender" />
        <Radio
          label="female"
          name="gender"
          value="female"
          onChange={this.handleInput}
        />
        <Radio
          label="male"
          name="gender"
          value="male"
          onChange={this.handleInput}
        />
        <Radio
          label="others"
          name="gender"
          value="others"
          onChange={this.handleInput}
        />
        <BootstrapButton
          variant="success"
          message="submit"
          onClick={this.submit}
          size="sm"
        />
       <div className="error">{this.state.error}</div> 
        <Link to='/view'>view</Link>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{

    return{
          user:state.user.users
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addUser: (e) => dispatch(addUser(e))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)