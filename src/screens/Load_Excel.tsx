import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Button, Platform } from 'react-native';
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
//************************ */
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { mySchema } from '../model/schema';
import Post from '../model/PersonModel';
// ****************************** Data Base******************
const adapter=new SQLiteAdapter({
  schema:mySchema,
  

  onSetUpError(error) {
    // Database failed to load -- offer the user to reload the app or log out
    console.log("db error", error);
  },
  dbName:"my db",
  jsi: Platform.OS==="ios",
});

const database = new Database ({
  adapter,
  modelClasses: [Post],
});

// Create 
const onCreate = async () =>{
  await database.write(async () =>{
    const newPost = await database.get('persons').create(post=>{
      post.Name="Santiago";
      post.Last_name="Ajla";
      post.Age=22;
    });
    console.log(newPost);
  });
};

//Read
const onRead=async()=>{
  const allPosts=await database.get('persons').query().fetch();
  console.log(allPosts);
  allPosts.map(post=>{
    console.log(post.Name);
  });
};

const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState<null | DocumentPickerResponse>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0); // Nuevo estado para el progreso de carga
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [excelData, setExcelData] = useState<string | null>(null);
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
        console.log('Datos de Celdas:', XLSX.utils.sheet_to_json(firstSheet));
        
        setExcelData(fileContent);
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
        <View style={appStyles.rectangle_load}>
          <Image source={require('../images/Upload_icon.png')} style={appStyles.icon_load} />
          <Text style={appStyles.browse_txt} onPress={pickDocument}>Examinar</Text>

          <Text style={appStyles.formats_txt}>Formatos compatibles: XLSX </Text>
        </View>

        <View>
          <Image source={require('../images/Lottie_file.jpg')} style={appStyles.imagen_gif} />
        </View>

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
                {/* ************ Botón para llamar a onCreate ****************** */}
                <TouchableOpacity
                  style={appStyles.btn_container_modal}
                  onPress={onCreate}
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
              </View>
            </View>
          </Modal>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default UploadScreen;
