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
        // this._runFirstAnimation()
    }

    // _runFirstAnimation = () => {
    //     Animated.timing(
    //                 this.animatedFirstTextValue,
    //                 {
    //                     toValue: 1,
    //                     useNativeDriver: true
    //                 }
    //             ).start(()=>{
    //                 this._runSecondAnimation()
    //             })
    // }

    // _runSecondAnimation = () => {
    //     Animated.timing(
    //         this.animatedSecondTextValue,
    //         {
    //             toValue: 1,
    //             useNativeDriver: true
    //         }
    //     ).start(()=>{
    //         this.setState({ showLoginStuff: true })
    //     })
    // }



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

        }
        else {
            this.setState({ renderPasswordField: true })
        }
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
                    this.state.showLoginStuff
                        ? <View style={Styles.loginCard}>


                            <InputField placeholder="johndoe@abc.com" placeholderTextColor="#ccc" source={emailIcon}
                                value={this.state.email} onChangeText={(text) => this.onChangeText(text, 'email')}
                                onSubmitEditing={() => this.setState({ renderPasswordField: true })} keyboardType="email-address"
                            />

                            {
                                this.state.renderPasswordField
                                    ? <InputField placeholder="Enter password" placeholderTextColor="#ccc" source={passwordIcon}
                                        value={this.state.password} onChangeText={(text) => this.onChangeText(text, 'password')}
                                        togglePassword={this._togglePassword} secureTextEntry={this.state.hidePassword}
                                    />
                                    : null
                            }
                            
                            <Button onPress={this._onPress} />



                        </View>

                        : null
                }
            </ImageBackground>
        )
    }
}