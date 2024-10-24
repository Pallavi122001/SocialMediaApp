import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SW,SF,SH } from "../../utils/FontDimension";
const styles=StyleSheet.create({
    HomeContainer:{
        flex:1,
        backgroundColor:Colors.themeColor,
        justifyContent:"center",
        alignItems:"center"
    },
    camera:{
        color:Colors.dark
    },
    image:{
        width:SW(40),
        height:SH(40)
    }
})

export default styles;