import { StyleSheet } from 'react-native';
import { SH, SW, SF } from '../../utils/FontDimension';
import { Colors } from '../../utils/Colors';

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: Colors.light,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lottie: {
        width: SW(120),
        height: SH(70),
        alignItems: "center",
        resizeMode:"contain"
    },
});

export default styles;
