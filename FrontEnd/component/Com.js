import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

// import { Appbar } from 'react-native-paper';

export default class Com extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Appbar.Header>
            {/* <Appbar.BackAction onPress={} /> */}
            <Appbar.Content title="Title" subtitle="Subtitle" />
            {/* <Appbar.Action icon="magnify" onPress={} /> */}
            <Appbar.Action onPress={console.log()} />
          </Appbar.Header>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
