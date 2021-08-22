// CustomButton.js
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class RoundButton extends Component{

    static defaultProps = {
        title: 'untitled',
        titleColor: '#3C64E6',
        buttonColor: '#ffffff',
        onPress: () => null,
      }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={[
        styles.button,
        {backgroundColor: this.props.buttonColor}
      ]}
      onPress={this.props.onPress}>
        <Text style={[
          styles.title,
          {color: this.props.titleColor}
        ]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,

        position: 'relative',
        // width: 16, 
        // height: 44,
        // left: 0,
        // top: 0,

        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#3C64E6',
        borderRadius: 22,

        marginBottom: 12,
      },
      title: {
        fontSize: 15,
      },
});