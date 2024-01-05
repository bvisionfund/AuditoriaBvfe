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
import {onRead_personal_information,onCreate_personal_information,deleteAllRecords } from '../Auditoria_DB';
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
        const firstSheetName = workbook.SheetNames[0];
        const firstSheet = workbook.Sheets[firstSheetName];
        // Specify the columns to extract
        const columnsToExtract = ['Secuencial','Nombres', 'Apellidos', 'Identificacion', 'Agencia','Grupo','N expediente','N Credito',
        'Fecha desembolso','Fecha vencimiento','Monto','Estado Civil','Nombre Conyuge','Menores 18','Hijos patrocinados','Direccion',
        'Telefono','Genero','Estado'];
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
        //****************Save the data in INFORMACIONPERSONAL****** */
        const Rows_selected=selectedRows as { 'Secuencial': number; 'Nombres': string; 'Apellidos': string; 'Identificacion': string; 'Agencia': string;
          'Grupo': string; 'N expediente':string; 'N Credito': string; 'Fecha desembolso':string; 'Fecha vencimiento':string;
          'Monto': number; 'Estado Civil': string; 'Nombre Conyuge': string; 'Menores 18': number; 'Hijos patrocinados': number;
          'Direccion': string; 'Telefono': string; 'Genero':string; 'Estado': string}[];
        //Iterate over each row and save it to the database
        Rows_selected.forEach(async (row) => {
          await onCreate_personal_information(row['Secuencial'],row['Nombres'],row['Apellidos'],row['Identificacion'],row['Agencia'],row['Grupo'],
          row['N expediente'],row['N Credito'],row['Fecha desembolso'],row['Fecha vencimiento'],row['Monto'],row['Estado Civil'],
          row['Nombre Conyuge'],row['Menores 18'],row['Hijos patrocinados'],row['Direccion'],row['Telefono'],row['Genero'],
          row['Estado']);
        });

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
        onPress={() => onCreate_personal_information(1,'Saire David','Conejo Paez','1003818497','Ibarra',
        'XX','50','10','02/10/2012','02/02/2024',1500,'SOLTERO','',1,2,'PIMAMPIRO','0999969036','MASCULINO','ACTIVO')}
      >
        <Text style={appStyles.buttonText}>Crear</Text>
      </TouchableOpacity>

      {/* ************ Botón para llamar a onRead ****************** */}
      <TouchableOpacity
        style={appStyles.btn_container_modal}
        onPress={onRead_personal_information}
      >
        <Text style={appStyles.buttonText}>Leer</Text>
      </TouchableOpacity>

      {/* ************ Botón para llamar a deleteAllRecords ****************** */}
      <TouchableOpacity
        style={appStyles.btn_container_modal}
        onPress={deleteAllRecords}
      >
        <Text style={appStyles.buttonText}>Eliminar</Text>
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
