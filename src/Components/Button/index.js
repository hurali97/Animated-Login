import React, { Component } from 'react'
import { View, Text, Animated, Image, TouchableOpacity } from 'react-native'
import Styles from './Styles.js'
import rightArrow from '../../assets/images/right-arrow.png'


export default class Button extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }

    this.springValue = new Animated.Value(0.01)
  }

  componentDidMount() {
    this._renderAnimation()
  }

  _renderAnimation = () => {
    this.springValue.setValue(0.01)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        bounciness: 75,
        useNativeDriver: true
      }
    ).start()
  }

  spring = () => {
    this.springValue.setValue(0.01)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        bounciness: 75,
        useNativeDriver: true
      }
    ).start(() => {
      this.props.onPress()
    })
  }

  onPress = () => {
    this.spring()
  }

  render() {
    return (<TouchableOpacity onPress={this.onPress}  >
      <Animated.View style={[Styles.Container, { transform: [{ scale: this.springValue }] }]}>
        <Image source={rightArrow} style={Styles.imageStyle} />
      </Animated.View>
    </TouchableOpacity>
    )
  }
}