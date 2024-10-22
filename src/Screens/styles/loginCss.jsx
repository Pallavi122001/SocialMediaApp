import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SW,SH,SF } from "../../utils/FontDimension";
const styles=StyleSheet.create({
    loginCard:{
        backgroundColor:"#fff",
        marginTop:SH(5),
        borderTopLeftRadius:SW(10),
        borderTopRightRadius:SW(10),
        height:"100%",
        padding:SW(10)
    },
    text:{
         color:Colors.theme,
         fontWeight:'bold',
         fontSize:SF(4)
    },
    input:{
        borderBottomColor:"#d149d1",
        borderBottomWidth:1
    },
    inputContanier:{
        marginVertical:SH(2)
    },
    forgot_text:{
        color:Colors.theme,
         fontWeight:'bold',
         fontSize:SF(4),
         marginLeft:SW(40),
         marginBottom:SH(6)
    },
   button:{
      backgroundColor:Colors.theme,
      borderRadius:10,
      paddingVertical:SH(1),
   },
   buttonText:{
    color:"#fff",
    fontSize:SF(5),
    textAlign:"center"
   },
   TopText:{
    color:'#fff',
    fontSize:SF(10)
   },
   topContanier:{
    paddingTop:SH(10),
    paddingLeft:SW(5)
   }
})
export default styles;