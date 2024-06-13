import { StyleSheet } from "react-native";

const ProfileInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    form: {
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formImage:{
        height:40,
        width:40
    },
    logoContainer:{
      position: 'absolute',
      alignSelf:'center',
      top: '11%'
    },
    logoImage:{
      width: 150,
      height:150,
      borderRadius: 100
    },
    logoText:{
      color:'white',
      textAlign:'center',
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold'
    },
});

export default ProfileInfoStyles;