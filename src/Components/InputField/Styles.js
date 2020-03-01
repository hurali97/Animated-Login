import { StyleSheet } from 'react-native'
import { vh, vw } from '../../Units';

export default Styles = StyleSheet.create({

    Container: {
        backgroundColor: '#fef5e7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 3 * vw,
        borderRadius: 2 * vw,
        flex: 1,
        shadowColor: 'gray',
        elevation: 5,
        shadowOffset: { width: 3, height: 7 },
        shadowRadius: 2 * vw,
        shadowOpacity: 0.8
    },
    iconStyles: {
        height: 3 * vh,
        width: 3 * vh,
        marginRight: 1 * vw,
    },
    passwordStyles: {
        height: 3 * vh,
        width: 3 * vh,
        marginRight: 1 * vw, 
    },
    parent: {
        height: 5 * vh,
        width: 80 * vw,
        marginVertical: 1 * vh
    },
    inputStyles: {
        width: '90%',
        height: '100%',
    },
    inputRightstyles: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '20%', 
        alignItems: 'center',
        paddingRight:1*vw
    },
    inputStartStyles:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        width:'80%', 
    alignItems:'center',

}
});