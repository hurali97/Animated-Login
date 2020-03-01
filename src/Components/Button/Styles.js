import { StyleSheet } from 'react-native'
import { vw, vh } from '../../Units';

export default Styles = StyleSheet.create({

    Container: { 
        backgroundColor: '#fef5e7',
        borderRadius: 5*vw,
        padding: 1*vh,
        justifyContent:'center',
        alignItems:'center',
        width: 15*vw,
        height: 5*vh,
        shadowColor: 'gray',
        elevation: 10,
        shadowOffset: { width: 3, height: 7 },
        shadowRadius: 2 * vw,
        shadowOpacity: 0.8, 
    },
    imageStyle:{
        height:'100%',
        width: '100%', 
        resizeMode: 'contain',
    
    }
});