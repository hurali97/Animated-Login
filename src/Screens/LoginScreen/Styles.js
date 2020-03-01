import { StyleSheet } from 'react-native'
import { vh, vw } from '../../Units';

export default Styles = StyleSheet.create({

    Container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    loginCard: {
        alignItems: 'flex-end',
        marginBottom: 20 * vh,
    },
    HeadingContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeStyle: {
        fontSize: 6 * vw,
        fontFamily: 'Spartan-Medium'
    },
    headingStyle: {
        fontSize: 8 * vw,
        fontFamily: 'Spartan-SemiBold'
    }

});