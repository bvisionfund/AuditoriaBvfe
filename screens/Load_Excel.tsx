import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';

const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState<null | DocumentPickerResponse>(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      if (result.length > 0) {
        setSelectedFile(result[0]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  };

  return (
    <LinearGradient colors={['#FF5900', '#EEAA86']} style={styles.container}>
      <View style={styles.overlay}>
        {/* <Image source={require('../src/images/OIP.jpg')} style={styles.imagen} />
       */}</View>
      <View style={styles.content}>
        <View style={styles.rectangulo}>
          <Image source={require('../src/images/Upload_icon.png')} style={styles.icon_load} />
          <Text style={styles.examinarText}>Examinar</Text>
          <Text style={styles.formatosText}>Formatos compatibles: XLSX </Text>
        
        </View>
        <Text style={styles.Txt_subirarchivo}>Subiendo Archvio</Text>

        <View style={styles.rectangulo_subiendo_archv}>
            <Text style={styles.Txt_name_file}>Tu_archivo.XLSX</Text>
        </View>
        <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
          <Text style={styles.buttonText}>Cargar Archivo</Text>
        </TouchableOpacity>
        {selectedFile && (
          <View style={styles.selectedFileContainer}>
            <Text style={styles.selectedFileText}>
              Archivo Seleccionado: {selectedFile.name}
            </Text>
            <View style={styles.rectangulo_subiendo_archv}></View>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 20,
  },
  rectangulo: {
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
  icon_load: {
    width: 85,
    height: 66,
  },
  examinarText: {
    color: '#FF5D05',
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  formatosText: {
    color: '#676767',
    fontFamily: 'Mulish',
    fontSize: 12,
    marginTop: 10,
  },
  uploadButton: {
    backgroundColor: '#FF5900',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedFileContainer: {
    marginTop: 20,
  },
  selectedFileText: {
    fontSize: 16,
  },
  imagen: {
    width: '100%',
    height: '100%',
    //resizeMode: 'cover',
  },
  Txt_subirarchivo:{
    color: '#404040',
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
  },
  rectangulo_subiendo_archv:{
    width: 350,
    height: 34,
    //borderColor: '#FF5900',
    //borderWidth: 2,
    //borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  Txt_name_file:{
    color: '#404040',
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default UploadScreen;
