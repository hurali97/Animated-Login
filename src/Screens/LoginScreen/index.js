import React, { Component } from 'react'
import { View, ImageBackground, Text, Animated } from 'react-native'
import Styles from './Styles.js'
import InputField from '../../Components/InputField/index.js';
import emailIcon from '../../assets/images/email.png'
import passwordIcon from '../../assets/images/password.png'
import backgroundImage from '../../assets/images/background.jpg'
import Button from '../../Components/Button/index.js';


export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            hidePassword: true,
            renderPasswordField: false,
            showLoginStuff: false,
        }

        this.animatedFirstTextValue = new Animated.Value(0)
        this.animatedSecondTextValue = new Animated.Value(0.01)
    }

    componentDidMount() {
        this._runAnimations()
    }





    _runAnimations = () => {
        Animated.stagger(500, [
            Animated.timing(
                this.animatedFirstTextValue,
                {
                    toValue: 1,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.animatedSecondTextValue,
                {
                    toValue: 1,
                    useNativeDriver: true
                }
            )
        ])
            .start(() => {
                
                this.setState({ showLoginStuff: true })
            })
    }


    onChangeText = (text, field) => {
        this.setState({ [field]: text })
    }

    _togglePassword = () => {
        this.setState({ hidePassword: !this.state.hidePassword })
    }


    _onPress = () => {
        if (this.state.renderPasswordField) {
            alert('Thank you')
        }
        else {
            this.setState({ renderPasswordField: true })
            setTimeout(() => {
                this.passwordField.focus()
            }, 300)
        }
    }

    _renderLoginStuff = () => {
        if (this.state.showLoginStuff)
            return (
                <View style={Styles.loginCard}>
                    <InputField placeholder="johndoe@abc.com" placeholderTextColor="#ccc" source={emailIcon}
                        value={this.state.email} onChangeText={(text) => this.onChangeText(text, 'email')}
                        onSubmitEditing={this._onEmailSubmit} blurOnSubmit={false}
                        keyboardType="email-address" inputRef={_r => this.emailField = _r}

                    />

                    {
                        this._renderPassword()
                    }

                    <Button onPress={this._onPress} />

                </View>
            )
        else
            return null
    }


    _renderPassword = () => {
        if (this.state.renderPasswordField)
            return <InputField placeholder="Enter password" placeholderTextColor="#ccc" source={passwordIcon}
                value={this.state.password} onChangeText={(text) => this.onChangeText(text, 'password')}
                togglePassword={this._togglePassword} secureTextEntry={this.state.hidePassword}
                inputRef={_r => this.passwordField = _r} onSubmitEditing={this._onPress}
            />
        else
            return null
    }

    _onEmailSubmit = () => {
        this.setState({ renderPasswordField: true })
        setTimeout(() => {
            this.passwordField.focus()
        }, 300)

    }

    render() {

        return (
            <ImageBackground source={backgroundImage} style={Styles.Container} >

                <View style={Styles.HeadingContainer}>
                    <Animated.View style={[{ transform: [{ scale: this.animatedFirstTextValue }] }]}>
                        <Text style={Styles.welcomeStyle}> Welcome To </Text>
                    </Animated.View>

                    <Animated.View style={[{ transform: [{ scale: this.animatedSecondTextValue }] }]}>
                        <Text style={Styles.headingStyle}>  Login Animated Demo </Text>
                    </Animated.View>
                </View>

                {
                    this._renderLoginStuff()
                }
            </ImageBackground>
        )
    }
}