import {StyleSheet} from 'react-native';

export const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  containerCard: {
    backgroundColor: 'yellow',
    alignItems: 'flex-start',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 16,
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    marginBottom: 1,
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 8,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 16,
  },
  dataContainer: {
    marginTop: 8,
  },
  logItem: {
    marginBottom: 8,
    paddingTop: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Dark Mode
  darkModeText: {
    color: 'white',
  },
  darkModeContainer: {
    backgroundColor: 'black',
  },
  successText:{
    color:'green'
  }
});
