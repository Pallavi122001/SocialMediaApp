import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SW, SH, SF } from "../../utils/FontDimension";
const styles = StyleSheet.create({
    icon:{
     position:"absolute",
     top:SH(5),
     left:SW(90)
    },
    RegisterContanier: {
        backgroundColor: Colors.themeColor,
    },
    RegisterCard: {
        backgroundColor: Colors.light,
        marginTop: SH(5),
        borderTopLeftRadius: SW(10),
        borderTopRightRadius: SW(10),
        height: "100%",
        padding: SW(10)
    },
    text: {
        color: Colors.themeColor,
        fontWeight: 'bold',
        fontSize: SF(4)
    },
    input: {
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
        color:Colors.dark
    },
    inputContanier: {
        marginVertical: SH(1)
    },
    button: {
        backgroundColor: Colors.themeColor,
        borderRadius: 10,
        paddingVertical: SH(1),
        marginTop:SH(5)
    },
    buttonText: {
        color: Colors.light,
        fontSize: SF(5),
        textAlign: "center"
    },
    TopText: {
        color: Colors.light,
        fontSize: SF(10)
    },
    topContanier: {
        paddingTop: SH(10),
        paddingLeft: SW(5)
    }
})
export default styles;