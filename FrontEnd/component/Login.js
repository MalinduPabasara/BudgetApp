import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
// import {Provider as PaperProvider,TextInput} from 'react-native-paper';
// import ComponentClass from './component/component';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  getData() {
    fetch('https://localhost:3000/login', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

  checkEligible() {
    if (json.name == this.state.name && json.password == this.state.password) {
      {
        this.props.navigation.navigate('Register');
      }
    } else {
      console.log('Values Does not Match');
    }
  }

 
  getDetails() {
    var name = this.state.name;
    var password = this.state.password;

    console.log(name, password);
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={style.regform}
        behavior={Platform.OS == 'android' ? 'padding' : 'height'}
      >
         {/* <Text style={style.header}>Login</Text>  */}

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
          // onPress={this.storeData.bind(this)}
          // onPress={this.getData.bind(this)}
          // onPress={this.props.navigation.navigate('Register') }


          // onPress={()=>{this.props.navigation.navigate('Register')}}
          // onPress={() => {
          //   fetch('http://localhost:3000/login', {
          //     method: 'GET',
          //     headers: {
          //       Accept: 'application/json',
          //       'Content-Type': 'application/json'
          //     },

          //   })
          //     .then((response) => response.json())
          //     .then((json) => {
          //       console.log("aaaa")
          //       if (json.name == this.state.name && json.password == this.state.password) {
          //         { this.props.navigation.navigate('Register') }
          //       } else {
          //         console.log("Values Does not Match")
          //       }
          //     })
          // }

          // }
        >
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity 
onPress={this.getData.bind(this)}
>
<Text>Get Data</Text>
</TouchableOpacity> */}
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  regform: {
    alignSelf: 'center',
    width: 300,
    height: 360,
    backgroundColor: 'lightgreen',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 60,

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
    left: 110,
    top: 20,
    // borderBottomColor:'lightblue',
    // borderBottomWidth:1,
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
    marginTop: 10,
    width: 110,
    height: 60,
    left: 90,
    marginBottom: 10,
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
