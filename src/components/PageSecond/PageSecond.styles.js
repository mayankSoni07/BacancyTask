import { StyleSheet } from 'react-native';
import { width, height } from '../../lib/device';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#3b5998'
    },
    pageHeading:{
        marginTop: 20,
        fontSize: 25,
        fontWeight: "500",
        color: '#fff'
    },
    gotoButton:{
        position: 'absolute',
        bottom: 50
    }
});

export default styles;