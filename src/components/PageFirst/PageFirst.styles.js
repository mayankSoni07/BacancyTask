import { StyleSheet } from 'react-native';

import normalize, { moderateScale, verticalScale } from '../../lib/normalize';
import { width } from '../../lib/device';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#3b5998'
    },
    scroll: {
        alignItems: 'center',
        paddingVertical: 50,
        width: width
    },
    pageHeading: {
        marginTop: verticalScale(20),
        fontSize: normalize(25),
        fontWeight: "500",
        color: '#fff'
    },
    errorText: {
        color: 'red',
        height: 20
    },
    input: {
        width: 300,
        height: 40,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    buttonView: {
        marginTop: 100
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