import { StyleSheet } from "react-native";
import { SF, SH, SW } from "../../utils/FontDimension";
import { Colors } from "../../utils/Colors";
export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    height: "100%",
    width:"100%",
    paddingVertical:SH(4),
    backgroundColor:Colors.themeColor
  },
  welcomeText: {
    color:Colors.light,
    fontSize: SF(7),
    marginBottom: SH(2),
    fontWeight:"bold",
    textTransform:"uppercase",
    textAlign:"center"
  },
  welcomeContainer: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    padding: SH(2),
  },
  SignButton: {
    marginTop: SH(1),
    paddingVertical: SH(1),
    paddingHorizontal: SW(5),
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: SW(20),
  },
  signupButton:{
    marginTop: SH(1),
    paddingVertical: SH(1),
    paddingHorizontal: SW(5),
    backgroundColor: "#fff",
    borderRadius: SW(20),
  },
  buttonText: {
    color:Colors.light,
    textAlign: "center",
    fontSize: SF(5),
  },
  SignUpText: {
    color:Colors.dark,
    textAlign: "center",
    fontSize: SF(5),
  },
  image:{
    width:SW(10),
    height:SH(5),
    borderRadius:20,
    marginHorizontal:SW(3),
    marginVertical:SH(2)
  },
  imageContanier:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
  },
  icon:{
    width:SW(95),
    height:SH(45),
    
  },
  buttonContanier:{
    marginVertical:SH(5)
  }
});
