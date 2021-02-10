import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Counter extends Component {
  render() {
    return (
      <View>

        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.count}
        </Text>

        <View style={styles.HORIZONTAL_VIEW}>
          <Button 
            title="Decrement"
            onPress={this.props.decrement} />
          <Button
            title="Increment"
            onPress={this.props.increment} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  HORIZONTAL_VIEW: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: 10,
  },
});
