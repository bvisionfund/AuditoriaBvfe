import { StyleSheet } from 'react-native';
//Variables to define the background and text color
export const Colors = {
  background: '#FF5900',  
  text: '#333333',
  second_background: '#F6D8B2'       
};
export const Fonts = {
  fontFamily: 'Mulish',
};

// Colors to create Linear Gradient
export const Gradient_Colors = ['#FF5900', '#EEAA86'];


const appStyles = StyleSheet.create({
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
    marginTop: 40,
    marginBottom: 0,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  //Styles to text
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: '#FF8537',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
    // Styles of Text in Bottons
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontSize: 17,
    fontWeight: 'bold',
  },
  //Image Logo
  imagen_BF: {
    left: 0,
    top: 50,
    width: 318,
    height: 68,
    alignSelf: 'center', 
  },
  //Load_Excel Screen
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
  //****** Modal ******/
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
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    height: '23%',
  },
  btn_container_modal:{
    backgroundColor: '#0EBF1F', 
    //padding: 10,
    borderRadius: 5,
    width: 90,
    height: 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_btn_modal:{
    fontFamily: Fonts.fontFamily,
    color: '#000000',
    fontSize: 14,
  },
  txt_modal:{
    fontFamily: Fonts.fontFamily,
    fontSize: 13,
  }
});

export default appStyles;
