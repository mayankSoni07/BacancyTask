import { StyleSheet } from 'react-native';
import { width } from '../../lib/device';

const styles = StyleSheet.create({
    buttonView: {
        marginTop: 30
    },
    submit: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    submitText: {
        color: '#fff'
    }
});

export default styles;