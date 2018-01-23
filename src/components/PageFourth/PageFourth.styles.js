import { StyleSheet } from 'react-native';
import { width, height } from '../../lib/device';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#3b5998'
    },
    fieldView:{
        flexDirection: 'row',
        marginTop: 5
    },
    fieldLabel:{
        flex: 0.3,
        fontSize: 20,
        fontWeight: "300",
        marginLeft: 10,
        color: 'black'
    },
    fieldDot:{
        // flex: 0.1,
        fontSize: 20,
        fontWeight: "300",
        color: 'black'
    },
    fieldValue:{
        flex: 0.7,
        fontSize: 20,
        fontWeight: "500",
        color: 'black',
        marginLeft: 10,
    },
    scroll: {
        alignItems: 'center',
        width: width,
    },
});

export default styles;