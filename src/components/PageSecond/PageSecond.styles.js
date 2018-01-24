import { StyleSheet } from 'react-native';
import { width, height } from '../../lib/device';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#3b5998'
    },
    imageView:{
        marginVertical: 100
    },
    image: {
        height: 150,
        width: 150
    }
});

export default styles;