import { StyleSheet } from 'react-native';
import { width } from '../../lib/device';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: width,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerHeading:{
        fontSize: 20,
        fontWeight: "500",
        color: '#3b5998',
    },
    backButton: {
        position: 'absolute',
        left: 10
    },
    backImage: {
        height: 20,
        width: 20
    }
});

export default styles;