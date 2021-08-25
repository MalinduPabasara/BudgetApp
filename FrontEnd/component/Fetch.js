import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class Fetch extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    getData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1',{
            method:'GET'
        })
        .then(response => response.json())
        .then(json => console.log(json.title))
    }
    
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title="Send"
                onPress={this.getData.bind(this)}>

                </Button>
            </View>
        )
    }
}
