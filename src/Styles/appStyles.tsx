import { Center } from 'native-base';
import { F, both } from 'rambdax';
import { StyleSheet } from 'react-native';
//Variables to define the background and text color
export const Colors = {
  background: '#FF5900',  
  text: '#333333',
  second_background: '#F6D8B2',
  background_questions: '#F6EEE4'      
};
// Type of word
export const Fonts = {
  fontFamily: 'Mulish',
};

// Colors to create Linear Gradient
export const Gradient_Colors = ['#FF5900', '#EEAA86'];
export const textStyles = StyleSheet.create({
  optionText: {
    fontSize: 16,
    color: 'green',
  },
});
export const pickerStyles = StyleSheet.create({
  inputIOS: {
    color: '#FF5900',
  },
  inputAndroid: {
    color: '#FF5900',
  },
  placeholder: {
    color: '#FF5900',
  },
});


const appStyles = StyleSheet.create({
  container_safearea:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 0,
    marginBottom: 0,
    padding: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  //********************** Styles to text **********************
  title: {
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subtitle:{
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontSize: 17,
    textAlign: 'center',
  },
  instruction:{
    color: '#404040',
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
  },
  //********************** Login Screen **********************
  input_user: {
    alignSelf:'center',
    width: 260,
    height: 54,
    borderRadius:15,
    borderColor: '#FFF6ED',
    borderWidth: 1,
    marginTop:100,
    paddingLeft: 10,
  },
  input_pass: {
    alignSelf:'center',
    width: 260,
    height: 54,
    borderRadius:15,
    borderColor: '#FFF6ED',
    borderWidth: 1,
    marginTop:30,
    paddingLeft: 10,
  },
  loginButton: {
    marginTop: 50,
    marginBottom: 50,
    alignSelf:'center',
    width:239,
    height: 45,
    backgroundColor: '#FF8537',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  txt_forgot:{
    fontFamily: Fonts.fontFamily,
    color: '#FFFFFF',
    fontSize: 16,
    alignSelf: 'center',
  },
  txt_forgot_two:{
    fontFamily: Fonts.fontFamily,
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },
  
  // ********************** Styles of Text in Bottons **********************
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontSize: 17,
    fontWeight: 'bold',
  },
  container_Gradient: {
    flex: 1,
  },
  // ********************** Image Logo **********************
  imagen_BF: {
    left: 0,
    top: 50,
    width: 318,
    height: 68,
    alignSelf: 'center', 
  },
  //********************** Load_Excel Screen **********************
  rectangle_load:{
    marginBottom: 20,
    marginTop: 20,
    width: 350,
    height: 202,
    borderColor: '#FF5900',
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6D8B2',
  },
  browse_txt:{
    color: '#FF5D05',
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  formats_txt: {
    color: '#676767',
    fontFamily: 'Mulish',
    fontSize: 12,
    marginTop: 10,
  },
  load_file_txt:{
    color: '#404040',
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
  },
  rectangle_load_file:{
    marginTop:20,
    marginBottom:10,
    width: 350,
    height:34,
    justifyContent: 'center',
    padding: 0,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  name_file_txt:{
    flex: 1,
    color: '#0F0F0F',
    fontFamily: 'Mulish',
    padding:8,
    fontSize: 12,
    textAlign:'left'
  },
  icon :{
    flex: 1,
    paddingRight: 8,
    paddingTop: 1,
    alignSelf: 'flex-end',
  },
  uploadButton:{
    marginTop:20,
    backgroundColor: '#FF5900',
    width: 350,
    height:45,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon_load:{
    width: 85,
    height: 66,
  },
  bar_style:{
    marginTop: 0,
    width: 350,
    height: 10,
    borderRadius: 5,
    color: '#5CB74E',
    unfilledColor: '#FFFFFF',
  },
  progressText: {
    marginTop: 5,
    color: 'white',
    fontFamily: 'Mulish',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf:"center"
  },
  //********************** Modal **********************/
  icon_chechk: {
    marginTop: 0,
    marginBottom:20,
    width: 50,
    height: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F6D8B2',
    padding: 19,
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    height: '25%',
  },
  btn_container_modal:{
    marginTop:20,
    backgroundColor: '#FF5900', 
    borderRadius: 5,
    width: 100,
    height: 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_btn_modal:{
    fontFamily: Fonts.fontFamily,
    color: '#FFFFFF',
    fontSize: 14,
  },
  txt_modal:{
    fontFamily: Fonts.fontFamily,
    fontSize: 13,
  },
  txt_modal_two:{
    fontFamily: Fonts.fontFamily,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FF5900' 
  },
  imagen_gif :{
    marginTop:20,
    width:350,
    height: 250,
    marginBottom: 20
  },
  //*************** ActivityIndicator*************** */
  activityIndicatorContainer:{
    //marginBottom: 10,
    //marginTop: 10,
    width: 100,
    height: 80,
    borderColor: '#FF5900',
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6D8B2',
    alignSelf: 'center'
  },
  uploadingText:{
    fontFamily: Fonts.fontFamily,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000000'
  },
  //*******************NavBar Style************* */
  navbar_container:{
    height:82,
    width: 420,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // ******************* Home Screen **************
  home_container:{
    height:150,
    width: 420,
    //backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center'
  },
  container_icon:{
    height:125,
    width: 125,
    backgroundColor: '#F6D8B2',
    borderRadius: 5,
    padding:20,
    alignItems: 'center',
    alignSelf: 'center'
  },
  text_icon:{
    marginTop:5,
    alignSelf: 'center',
    fontFamily: Fonts.fontFamily,
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 25,
  },
  //**************** Search Screen *******************/
  search_container: {
  width: 410,
  height: 150,
  //backgroundColor: '#FFFFFF',
  alignSelf: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 30,
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  
},
search_input: {
  width: 250,
  height: 60,
  backgroundColor: Colors.second_background,
},
search_icon: {
  backgroundColor: '#EEAA86',
  width: 70,
  height: 60,
  padding: 5,
  alignItems: 'center',
  justifyContent: 'center',
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
},
txt_search:{
  color: '#000000',
  fontFamily: 'Mulish',
  fontWeight: 'bold',
  fontSize: 15,
  paddingBottom:10,
  marginLeft: 15,
  alignSelf: 'flex-start'
},
//************************** List of members ************************** 
users_container:{
  width: 346,
  height: 100,
  flex:1,
  borderColor: '#FF5900',
  borderWidth: 2,
},
listItem:{
  width: 325,
  height: 100,
  backgroundColor: Colors.second_background,
  borderRadius: 10,
  marginBottom: 10,
  alignItems:'center',
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 15,
},
style_circle:{
  width: 20,
  height: 20,
  borderRadius: 15, 
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'flex-end',
},
icon_user:{
  alignSelf:'center',
  width: 60,
  height: 60,
  borderRadius: 30, 
  backgroundColor: '#FF8543', 
  justifyContent: 'center',
  alignItems: 'center'

},
info_user:{
  flex: 1,
  alignSelf:'center',
  paddingLeft:20
},
txt_info_user:{
  color: '#000000',
  fontFamily: Fonts.fontFamily,
  fontWeight: 'bold',
  fontSize: 14,
  marginBottom:4
},
//***************Questions Screens******* */
container_information:{
  left: 0,
  top: 0,
  width: 415,
  height: 230,
  alignSelf: 'center',
  //backgroundColor: '#FF5900'
},
container_info:{
  left: 0,
  top: 0,
  width: 410,
  height: 150,
  alignSelf: 'center',
  backgroundColor: '#FF5900',
  borderBottomRightRadius:25,
  borderBottomLeftRadius:25
},
txt_title_personal_info:{
  marginTop:20,
  marginBottom:10,
  marginLeft:10,
  alignSelf: 'flex-start',
  fontFamily: Fonts.fontFamily,
  fontWeight: 'bold',
  fontSize: 20,
  color: '#FFFFFF'
},
container_location:{
  marginTop:10,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginRight:15
},
txt_location:{
  marginTop:5,
  fontFamily: Fonts.fontFamily,
  fontWeight: 'bold',
  fontSize: 15
},
circle_image:{
  marginTop:10,
  width: 100,
  height: 100,
  borderRadius: 50,
  alignSelf: 'center',
  backgroundColor: '#ffffff' 
},
input_answer: {
  alignSelf:'center',
  width: 380,
  height: 50,
  borderRadius:15,
  backgroundColor:'#F6D8B2',
  borderColor: '#CCCCCC',
  borderWidth: 1,
  marginBottom:15,
  paddingLeft: 15,
},
text_question:{
  fontFamily: Fonts.fontFamily,
  fontSize:15,
  marginBottom:5
},
title_line: {
  borderBottomWidth: 1, 
  borderTopWidth: 1,    
  borderColor: '#FFFFFF', 
  marginBottom: 30,    
  marginTop: 30,
},
txt_title_encuesta:{
  marginLeft:10,
  alignSelf: 'flex-start',
  fontFamily: Fonts.fontFamily,
  fontWeight: 'bold',
  fontSize: 20,
  color: '#FFFFFF'
},
optionsContainer:{
  height:65,
  width:350,
  borderColor: '#CCCCCC',
  borderWidth: 1,
  borderRadius:15,
  backgroundColor:Colors.second_background,
  alignSelf: 'flex-start',
  //paddingLeft:0
},
txt_options:{
  fontFamily:Fonts.fontFamily,
  fontSize: 20
}
});

export default appStyles;
