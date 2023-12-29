import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet, Image, Modal, Button, Platform } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import appStyles, { Gradient_Colors } from '../Styles/appStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUpload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
// ****************************** Data Base******************
import { onRead, onCreate, deleteAllRecords } from '../Auditoria_Data_Base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/homeStack';

// ************************** Navigation Bar********************

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Load_Excel'>;
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const UploadScreen: React.FC<LoginProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [excelData, setExcelData] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>(''); 
  //**************** Select Excel File********************
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.xlsx],
      });
      if (Array.isArray(result) && result.length > 0 && result[0].uri) {
        const path = result[0].uri;
        //  Name of document
        const currentFileName = result[0].name ?? '';
        console.log('El nombre del archiv es: ',currentFileName);

        const fileContent = await RNFS.readFile(path, 'base64');
        const workbook = XLSX.read(fileContent, { type: 'base64' });
        // Print Sheet Names
        console.log('Nombres de las Hojas:', workbook.SheetNames);

        // Get data from first sheet
        const firstSheetName = workbook.SheetNames[1];
        const firstSheet = workbook.Sheets[firstSheetName];
        // Specify the columns to extract
        const columnsToExtract = ['NOMBRES','IDENTIFICACION', 'MONTO OTORGADO', 'TASA', 'ACTIVIDAD CLIENTE'];
        // Find the headerRow
        const headerRow: string[] = (XLSX.utils.sheet_to_json(firstSheet, { header: 1 }) as string[][])[0];
        // Find the index of column to extract
        const columnIndexes = columnsToExtract.map(column => headerRow.indexOf(column));
        // Data from rows
        const rows = XLSX.utils.sheet_to_json(firstSheet);
        // Iterate over all rows and find the columns 
        const selectedRows: Record<string, any>[] = (rows as Record<string, any>[]).map((row: Record<string, any>) => {
          const selectedRow: Record<string, any> = {};
          columnIndexes.forEach(index => {
            const columnName = headerRow[index];
            selectedRow[columnName] = row[columnName];
          });
          return selectedRow;
        });
        console.log('Data from selected rows:', selectedRows);
        //****************Save the data in USER_R_C****** */
        //*****************Option 1******************** */
        const Rows_selected=selectedRows as { 'ACTIVIDAD CLIENTE': string; IDENTIFICACION: string; 'MONTO OTORGADO': number; NOMBRES: string; TASA: number}[];
        // Iterate over each row and save it to the database
         Rows_selected.forEach(async (row) => {
          await onCreate(row.NOMBRES, row.IDENTIFICACION, row['MONTO OTORGADO'], row.TASA, row['ACTIVIDAD CLIENTE']);
        });
        //*****************Option 2******************** */
        // Save the data in the DB
        /* selectedRows.forEach(async (selectedRow) => {
          const { NOMBRES, IDENTIFICACION, 'MONTO OTORGADO': monto, TASA, 'ACTIVIDAD CLIENTE': actividad_economica } = selectedRow;
          // Save in data base using OnCreate function
          await onCreate(NOMBRES, IDENTIFICACION, Number(monto), Number(TASA), actividad_economica);
        }); */
        //Set the file name
        setFileName(currentFileName);
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
        onPress={() => onCreate('Saire David Conejo Paez','1050447879',100.25,22.56,'Cultivo de tomates de mandarina')}
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
            onRequestClose={() => setModalVisible(false)}>
            <View style={appStyles.modalContainer}>
              <View style={appStyles.modalContent}>
                <Image source={require('../images/circle_check.png')} style={appStyles.icon_chechk}></Image>
                <Text style={appStyles.txt_modal}>El archivo 
                <Text style={appStyles.txt_modal_two}> {fileName} </Text> 
                se cargo correctamente.</Text>
                <TouchableOpacity 
                  style={appStyles.btn_container_modal}
                  onPress={() => setModalVisible(false)}>
                  <Text style={appStyles.buttonText}>Aceptar</Text> 
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* ********************** Navbar ***************** */}
          <View style={appStyles.navbar_container}>
            <TouchableOpacity onPress={() => navigation.navigate('Load_Excel')}>
              <FontAwesomeIcon icon={faUpload} size={40} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <FontAwesomeIcon icon={faHome} size={40} color="#696969" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size={40} color="#696969" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default UploadScreen;
