import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
// import { Appbar,Title,Paragraph,TextInput,Text,Card,TouchableOpacity} from 'react-native-paper';

export default class Main extends Component {
  constructor(props) {
    super(props);
    state = {
      income: '',
      transport: '',
      foodanddrink: '',
      clotheese: '',
      gas: '',
      services: '',
      shopping: '',
      medicine: '',
    };
  }

  postData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        income: this.state.income,
        transport: this.state.transport,
        foodanddrink: this.state.foodanddrink,
        clotheese: this.state.clotheese,
        gas: this.state.gas,
        services: this.state.services,
        shopping: this.state.shopping,
        medicine: this.state.medicine,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

  getDetails() {
    var income = this.state.income;
    var transport = this.state.transport;
    var foodanddrink = this.state.foodanddrink;
    var clotheese = this.state.clotheese;
    var gas = this.state.gas;
    var services = this.state.services;
    var shopping = this.state.shopping;
    var medicine = this.state.medicine;
    console.log(
      income,
      transport,
      foodanddrink,
      clotheese,
      gas,
      services,
      shopping,
      medicine,
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Appbar.Header style={styles.container1}>
            {/* <Appbar.BackAction onPress={console.log("A")} /> */}
            <Appbar.Content title="Budget" subtitle="Maintain Your Income" />
            {/* <Appbar.Action icon="magnify" onPress={console.log("B")} /> */}
            <Appbar.Action icon="dots-vertical" onPress={console.log('C')} />
          </Appbar.Header>
        </View>

        <View style={styles.container2}>
            {/* <Appbar style={styles.items}>
            <Appbar.Action
                icon="archive"
                onPress={() => console.log('Pressed archive')}
                />
                <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
                <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
                <Appbar.Action
                icon="delete"
                onPress={() => console.log('Pressed delete')}
                />
            </Appbar> */}
        </View>

        <Card style={styles.container3}>
          <Card.Content>
            <TextInput
              style={styles.incomeText}
              label="Income"
              value={this.state.income}
              onChangeText={value => {
                // console.log(value);
                this.setState({
                  income: value,
                });
              }}
            />
          </Card.Content>
        </Card>

        <View style={styles.container6}>
          <View style={styles.container4}>
            <TextInput
              style={styles.textInput}
              label="Transport"
              value={this.state.transport}
              onChangeText={value => {
                // console.log(value);
                this.setState({
                  transport: value,
                });
              }}
            />
            <TextInput
              style={styles.textInput}
              label="Food and Drink"
              value={this.state.foodanddrink}
              onChangeText={value => {
                // console.log(value);
                this.setState({
                  foodanddrink: value,
                });
              }}
            />
            <TextInput
              style={styles.textInput}
              label="Clotheese"
              value={this.state.clotheese}
              onChangeText={value => {
                // console.log(value);
                this.setState({
                  clotheese: value,
                });
              }}
            />
            <TextInput
              style={styles.textInput}
              label="Gas"
              value={this.state.gas}
              onChangeText={value => {
                // console.log(value);
                this.setState({
                  gas: value,
                });
              }}
            />
            {/* <TextInput style={styles.textInput}
            label="Services"
            value={this.userName.text}
            onChangeText={text => setText(text)}
        /> */}
            {/* <TextInput style={styles.textInput}
            label="Things to do"
            value={this.userName.text}
            onChangeText={text => setText(text)}
        /> */}
          </View>

          <View style={styles.container5}>
            <TextInput
              style={styles.textInput}
              label="Services"
              value={this.state.services}
              onChangeText={value => {
                // console.log(value);
                this.setState({
                  services: value,
                });
              }}
            />

            {/* <TextInput style={styles.textInput}
            label="Education"
            value={this.state.}
            onChangeText={(value)=>{
                // console.log(value);
                this.setState({
                  address:value
                })
              }}
        /> */}
            <TextInput
              style={styles.textInput}
              label="Shopping"
              value={this.state.shopping}
              onChangeText={value => {
                // console.log(value);
                this.setState({
                  shopping: value,
                });
              }}
            />
            <TextInput
              style={styles.textInput}
              label="Medicine"
              value={this.state.medicine}
              onChangeText={value => {
                // console.log(value);
                this.setState({
                  medicine: value,
                });
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          // onPress={this.postData.bind(this)}
          onPress={() => {
            fetch('https://localhost:3000/login', {
              method: 'POST',
              body: JSON.stringify({
                income: this.state.income,
                transport: this.state.transport,
                foodanddrink: this.state.foodanddrink,
                clotheese: this.state.clotheese,
                gas: this.state.gas,
                services: this.state.services,
                shopping: this.state.shopping,
                medicine: this.state.medicine,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then(response => response.json())
              .then(json => console.log(json));
          }}>
          <Text style={styles.buttonText}>Send Budget</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // onPress={this.postData.bind(this)}
          onPress={() => {}}>
          <Text style={styles.buttonText}>Budget</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// styles

const styles = StyleSheet.create({
  container: {},
  container1: {
    //    backgroundColor:'green'
  },
  container2: {
    //    position:'relative',
    top: 470,
  },

  container3: {
    // backgroundColor:'lightblue'
  },

  items: {
    //     position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    justifyContent: 'center',
  },

  textInput: {
    height: 70,
    fontSize: 10,
    //   right:40,
    //   bottom:200,
    //   top:10,
    //   width:150,
    marginBottom: 10,
    backgroundColor: '#F2F6DF',
  },
  container4: {
    width: 150,
    marginVertical: 20,
    marginHorizontal: 10,
  },

  container5: {
    marginHorizontal: 190,

    width: 150,
    position: 'absolute',
    top: 20,
    right: 0,
    left: 0,
  },

  incomeText: {
    height: 40,
    width: 280,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  container6: {
    backgroundColor: '#CEA6FF',
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 10,
  },
});
