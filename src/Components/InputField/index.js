import React, { Component } from 'react'
import { View, TouchableOpacity, Image, TextInput, Animated } from 'react-native'
import Styles from './Styles.js'
import showPassword from '../../assets/images/openEye.png'
import hidePassword from '../../assets/images/closeEye.png'
import { TypingAnimation } from 'react-native-typing-animation';
import { vw } from '../../Units/index.js';

export default class InputField extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showTyping: false
        }
        this.springValue = new Animated.Value(0.01)
    }


    componentDidMount(){
        this.spring()
    }


    renderEyeIcon = () => {
        if (this.props.secureTextEntry != undefined && this.props.value != '') {
            const source = this.props.secureTextEntry ? showPassword : hidePassword
            return <TouchableOpacity onPress={this.props.togglePassword}>
                        <Image source={source} style={Styles.passwordStyles} />
                    </TouchableOpacity>
        }

    }

    renderTyping = () => {
        if (this.state.showTyping) {
            return <TypingAnimation
                dotColor="black"
                dotMargin={3}
                dotAmplitude={3}
                dotSpeed={0.15}
                dotRadius={2.5}
                dotX={-5 * vw}
                dotY={-4}
            />
        }

    }

    _toggleState = () => {
        this.setState({ showTyping: !this.state.showTyping })
    }

    spring = () => {
        this.springValue.setValue(0.01)
      
        Animated.spring(
          this.springValue,
          {
            toValue: 1, 
            bounciness: 75, 
            useNativeDriver: true,
            delay: 100
          }
        ).start()
      }

    render() {

        const { placeholder, secureTextEntry, value, source,blurOnSubmit,
            placeholderTextColor, onChangeText,keyboardType, onSubmitEditing } = this.props

        return (
            <Animated.View style={[Styles.parent, {transform: [{scale: this.springValue} ]} ]}>
                <View style={Styles.Container}>
                    <View style={Styles.inputStartStyles}>
                        <Image source={source} style={Styles.iconStyles} />
                        <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} value={value}
                            placeholderTextColor={placeholderTextColor} onChangeText={onChangeText}
                            style={Styles.inputStyles}
                            onBlur={this._toggleState}
                            onFocus={this._toggleState}
                            keyboardType={keyboardType} 
                            ref={ _r => this.props.inputRef && this.props.inputRef(_r) }
                            onSubmitEditing={onSubmitEditing}
                            returnKeyType="go"
                            blurOnSubmit={blurOnSubmit}
                            {...this.props} 
                        />
                    </View>
                    <View style={Styles.inputRightstyles}>
                        {
                            this.renderTyping()
                        }

                        {
                            this.renderEyeIcon()
                        }

                    </View>
                </View>
            </Animated.View>
        )
    }
}