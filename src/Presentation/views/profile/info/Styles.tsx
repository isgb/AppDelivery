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
    formInfo: {
        flexDirection: 'row',
        alignItems:'center'
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
        height: '45%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formContent:{
        marginLeft:15
    },
    formImage:{
        height:30,
        width:30
    },
    formTextDescription:{
        fontSize: 12,
        color:'gray'
    },
    logoContainer:{
      position: 'absolute',
      alignSelf:'center',
      top: '14%'
    },
    logoImage:{
      width: 180,
      height:180,
      borderColor:'white',
      borderRadius: 100,
      borderWidth:2
    },
    logoText:{
      color:'white',
      textAlign:'center',
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold'
    },
    logout:{
        position: 'absolute',
        top:30,
        right:15
    },
    logoutImage:{
        width:40,
        height:40,

    }
});

export default ProfileInfoStyles;