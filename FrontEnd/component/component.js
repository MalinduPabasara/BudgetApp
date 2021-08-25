import React, {Component} from "react";
import {View,Text,Button,TextInput, StyleSheet} from 'react-native';
import { create } from "react-test-renderer";

export default class main extends Component{
  state={
    name:'',
    email:'',
    address:'',
    contact:'',

  }

getDetails(){
  var name=this.state.name;
  var email=this.state.email;
  var address=this.state.address;
  var contact=this.state.contact;
  console.log(name,email,address,contact);
}

getName(){
  if(this.state.name==''){
console.log("empty");
  }else{
    var user=this.state.name;
    console.log(user);
  }
  
}

  render(){
    return(
      <View>
        <Text style={style.title}>Register</Text>
       <TextInput 
       placeholder="Your Name"
       value={this.state.name}
       onChangeText={(value)=>{
              // console.log(value);
              this.setState({
                name:value
              })
       }}
       />
       <TextInput 
       placeholder="Email"
       value={this.state.email}
       onChangeText={(value)=>{
              // console.log(value);
              this.setState({
                email:value
              })
            }}
       />
       <TextInput 
       placeholder="Address"
       value={this.state.address}
       onChangeText={(value)=>{
              // console.log(value);
              this.setState({
                address:value
              })
            }}
       />
       <TextInput 
       placeholder="Contact No"
       value={this.state.contact}
       onChangeText={(value)=>{
              // console.log(value);
              this.setState({
                contact:value
              })
            }}
       />
    
       <Button
       title="Register"
       />

       <Button
       title="send"
       onPress=
        //  console.log("Hello");
         {this.getDetails.bind(this)}
       
       />

      </View>
      
    )
  }
}

const style=StyleSheet.create({
  title:{
    color:"black",
    marginLeft:150,
    fontSize:25,
    
  }
})