import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet, Image, Modal, Button, Platform } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import appStyles, { Gradient_Colors } from '../Styles/appStyles';
import { BotonCalc } from '../components/CustomButtom';
//import Icon from 'react-native-vector-icons/FontAwesome';
//*import { Icon } from '@iconify/react';
//import { IonIcon } from '@ionic/react';
//import ProgressBar from 'react-native-progress/Bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import XLSX from 'xlsx';
//import LottieView from 'lottie-react-native';
import RNFS from 'react-native-fs';
// ****************************** Data Base******************
import { onRead, onCreate, deleteAllRecords } from '../database';

const UploadScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [excelData, setExcelData] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.xlsx],
      });

      if (Array.isArray(result) && result.length > 0 && result[0].uri) {
        const path = result[0].uri;
        const fileContent = await RNFS.readFile(path, 'base64');
        const workbook = XLSX.read(fileContent, { type: 'base64' });

        // Print Sheet Names
        console.log('Nombres de las Hojas:', workbook.SheetNames);

        // Get data from first sheet
        const firstSheetName = workbook.SheetNames[0];
        const firstSheet = workbook.Sheets[firstSheetName];

        // Data from rows
        const rows = XLSX.utils.sheet_to_json(firstSheet) as { Nombre: string; Apellido: string; Edad: number }[];
        console.log('Data from rows:',rows);

        // Iterate over each row and save it to the database
        rows.forEach(async (row) => {
          await onCreate(row.Nombre, row.Apellido, row.Edad);
        });
        setExcelData(fileContent);
        //After store info in the DB, hidden de ActivityIndicator
        setUploading(false);
        //Modal Visible after store info in the DB
        setModalVisible(true);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // El usuario canceló la selección de archivos
      } else {
        console.error('Error seleccionando archivo:', err);
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
        <TouchableOpacity style={appStyles.rectangle_load} onPress={pickDocument}>
          <Image source={require('../images/Upload_icon.png')} style={appStyles.icon_load} />
          <Text style={appStyles.browse_txt}>Examinar</Text>
          <Text style={appStyles.formats_txt}>Formatos compatibles: XLSX </Text>
        </TouchableOpacity>
        {/* ***************** Activity Indicator********************** */}
      {uploading && (
          <View style={appStyles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={appStyles.uploadingText}>Cargando...</Text>
          </View>
        )} 
        {/* ***************** Lottie Section************************* */}
        <View>
        {/* <Image source={require('../images/Lottie_file.jpg')} style={appStyles.imagen_gif} /> */}
        </View>
        {/* ************ Botón para llamar a onCreate ****************** */}
        <TouchableOpacity
        style={appStyles.btn_container_modal}
        onPress={() => onCreate('Ricardo', 'Paez', 17)}
      >
        <Text style={appStyles.buttonText}>OnCreate</Text>
      </TouchableOpacity>

      {/* ************ Botón para llamar a onRead ****************** */}
      <TouchableOpacity
        style={appStyles.btn_container_modal}
        onPress={onRead}
      >
        <Text style={appStyles.buttonText}>OnRead</Text>
      </TouchableOpacity>

      {/* ************ Botón para llamar a deleteAllRecords ****************** */}
      <TouchableOpacity
        style={appStyles.btn_container_modal}
        onPress={deleteAllRecords}
      >
        <Text style={appStyles.buttonText}>deleteAllRecords</Text>
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
                <Image source={require('../images/circle_check.png')} style={appStyles.icon_chechk}></Image>
                <Text style={appStyles.txt_modal}>El archivo 
                <Text style={appStyles.txt_modal_two}> nombre_archivo.XSLX </Text> 
                se cargo correctamente.</Text>
                <TouchableOpacity 
                  style={appStyles.btn_container_modal}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={appStyles.buttonText}>Aceptar</Text> 
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
