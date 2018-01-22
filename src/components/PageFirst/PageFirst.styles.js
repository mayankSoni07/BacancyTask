import { StyleSheet } from 'react-native';

import normalize, { moderateScale, verticalScale } from '../../lib/normalize';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#3b5998'
    },
    pageHeading: {
        marginTop: verticalScale(20),
        fontSize: normalize(25),
        fontWeight: "500",
        color: '#fff'
    },
    gotoButton: {
        position: 'absolute',
        bottom: 50
    }
});

export default styles;