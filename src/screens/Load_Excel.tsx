import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Button } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import appStyles, { Gradient_Colors } from '../Styles/appStyles';
import { BotonCalc } from '../components/CustomButtom';
//import Icon from 'react-native-vector-icons/FontAwesome';
//*import { Icon } from '@iconify/react';
//import { IonIcon } from '@ionic/react';
import ProgressBar from 'react-native-progress/Bar';




const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState<null | DocumentPickerResponse>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0); // Nuevo estado para el progreso de carga
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Incrementa el progreso gradualmente cada segundo
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + 0.01;
        return newProgress >= 1 ? 1 : newProgress;
      });
    }, 10);

    // Limpia el intervalo después de 1 minuto
    setTimeout(() => {
      clearInterval(interval);
    }, 60000);

    // Limpieza al desmontar el componente
    return () => clearInterval(interval);
  }, []);

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

  function handleAccion(numeroTexto: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <LinearGradient colors={Gradient_Colors} style={styles.container}>
      <View>
        <Image source={require('../images/OIP.jpg')} style={appStyles.imagen_BF} />
      </View>
      <View style={appStyles.content}>
      <Text style={appStyles.title}>Subir Excel</Text>
        {/* ************ Select filet to load container ************* */}
        <View style={appStyles.rectangle_load}>
          <Image source={require('D:/users/sajala/Desktop/Attentd_2/AuditoriaBvfe/src/images/Upload_icon.png')} style={appStyles.icon_load} />
          <Text style={appStyles.browse_txt} onPress={pickDocument}>Examinar</Text>
          <Text style={appStyles.formats_txt}>Formatos compatibles: XLSX </Text>
        </View>

        <Text style={appStyles.instruction}>Subiendo Archvio</Text>

        {/* ************ Loading file container ************* */}

        <View style={appStyles.rectangle_load_file}>
            <Text style={appStyles.name_file_txt}>Tu_archivo.XLSX</Text>
        </View>
        {/* ************ Barra de progreso ************* */}
        <ProgressBar progress={uploadProgress} {...appStyles.bar_style}/>
        {/* ************ Texto de progreso ************* */}
        <Text style={appStyles.progressText}>{Math.round(uploadProgress * 100)}% Procesando</Text>


        <Text style={appStyles.instruction}>Archivo Subido</Text>
        {/* ************ Load file container *************/}
        <View style={appStyles.rectangle_load_file}>
            <Text style={appStyles.name_file_txt}>nombre_documento.XLSX</Text>
        </View>
        {/* ************ Load Button ************* */}
        <TouchableOpacity style={appStyles.uploadButton} onPress={() => setModalVisible(true)}>
          <Text style={appStyles.buttonText}>Cargar Archivo</Text>
        </TouchableOpacity>
        {/* ************ Modal ****************** */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={appStyles.modalContainer}>
            <View style={appStyles.modalContent}>
              <Image source={require('D:/users/sajala/Desktop/Attentd_2/AuditoriaBvfe/src/images/circle_check.png')} style={appStyles.icon_chechk}></Image>
              <Text style={appStyles.txt_modal}>El archivo nombre_archivo.XSLX se cargo correctamente.</Text>
              <TouchableOpacity 
                style={appStyles.btn_container_modal}
                onPress={() => setModalVisible(false)}
              >
                <Text style={appStyles.text_btn_modal}>Aceptar</Text> 
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    backgroundColor: 'white', 
    padding: 20,
    borderRadius: 10, 
    width: '80%', 
    height: '50%',
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
  }
});

export default UploadScreen;
