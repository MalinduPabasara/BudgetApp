import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// import ComponentClass from './component/component';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  postData() {
    fetch('https://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

  // getDetails() {
  //   var name = this.state.name;
  //   var email = this.state.email;
  //   var password = this.state.password;

  //   console.log(name, email, password);
  // }

  render() {
    return (
      <KeyboardAvoidingView
        style={style.regform}
        behavior={Platform.OS=='android'?'padding':'height'}
      >
        <Text style={style.header}>Register</Text>

        <TextInput
          style={style.textInput}
          placeholder="Name"
          underlineColorAndroid={'transparent'}
          value={this.state.name}
          onChangeText={value => {
            this.setState({
              name: value,
            });
          }}
        />

        <TextInput
          style={style.textInput}
          placeholder="Email"
          underlineColorAndroid={'transparent'}
          value={this.state.email}
          onChangeText={value => {
            this.setState({
              email: value,
            });
          }}
        />

        <TextInput
          style={style.textInput}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
          value={this.state.password}
          onChangeText={value => {
            this.setState({
              password: value,
            });
          }}
        />

        <TouchableOpacity
          style={style.button}
          // onPress={this.postData.bind(this)}
          onPress={() => {
            fetch('https://localhost:3000/login', {
              method: 'POST',
              body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
              }),
              headers: {
                // 'Content-type': 'application/json; charset=UTF-8',
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            })
              .then(response => response.json())
              .then(json => console.log(json));
          }}
        
        >
          <Text style={style.buttonText}>Sing up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  regform: {
    alignSelf: 'center',
    width: 300,
    height: 450,
    backgroundColor: 'lightgreen',
    top: 30,

    shadowColor: 'rgba(0, 0, 0, 1.1)',
    shadowOpacity: 0.9,
    elevation: 20,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // overflow: 'hidden',
  },


  header: {
    fontSize: 34,
    color: 'darkblue',
    paddingBottom: 30,
    marginBottom: 40,
    left: 85,
    top: 20,

  },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    width: 250,
    left: 20,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'green',
    marginTop: 30,
    width: 100,
    height: 60,
    left: 90,
    bottom: 10,
    marginBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    shadowColor: 'rgba(0, 0, 0, 1.1)',
    shadowOpacity: 0.9,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

});
