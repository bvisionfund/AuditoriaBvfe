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
import { SafeAreaView } from 'react-native-safe-area-context';
import XLSX from 'xlsx';




const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState<null | DocumentPickerResponse>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0); // Nuevo estado para el progreso de carga
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [excelData, setExcelData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
        // Load the info of excel
        //const workbook = XLSX.read(result[0].uri, { type: 'binary', WTF: 'string' });
        const workbook = XLSX.read('D:/users/sajala/Desktop/Attentd_2/AuditoriaBvfe/src/images/Libro1.xlsx', { type: 'binary', WTF: 'string' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setData(data);
  
        if (selectedFile) {
          console.log('Nombre del archivo seleccionado:', selectedFile.name);
          console.log('Datos del archivo Excel:', data);
          //console.log(data[0])
        }
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Usuario canceló la selección del archivo
        console.log('Selección de archivo cancelada por el usuario');
      } else {
        // Ocurrió otro error
        console.error('Error al seleccionar el archivo:', err);
      }
    }
  };

  function handleAccion(numeroTexto: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaView style={appStyles.container_Gradient}>
      <LinearGradient colors={Gradient_Colors} style={appStyles.container_Gradient}>
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
              <Text style={appStyles.name_file_txt}> {data.length > 0 ? data[0][0] : ''} </Text>
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
                <Text style={appStyles.txt_modal}>El archivo 
                <Text style={appStyles.txt_modal_two}> nombre_archivo.XSLX </Text> 
                se cargo correctamente.</Text>
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
    </SafeAreaView>
  );
};

export default UploadScreen;
