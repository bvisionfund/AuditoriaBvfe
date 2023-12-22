import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import XLSX from 'xlsx';

const ExcelReader = () => {
    const [excelData, setExcelData] = useState<string | null>(null);
  
    const pickDocument = async () => {
      try {
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
  
        if (Array.isArray(result) && result.length > 0 && result[0].uri) {
          const path = result[0].uri;
          const fileContent = await RNFS.readFile(path, 'base64');
          const workbook = XLSX.read(fileContent, { type: 'base64' });
  
          // Imprimir nombres de las hojas
          console.log('Nombres de las Hojas:', workbook.SheetNames);
  
          // Obtener datos de la primera hoja
          const firstSheetName = workbook.SheetNames[0];
          const firstSheet = workbook.Sheets[firstSheetName];
  
          // Imprimir datos de celdas
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
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Información del Archivo Excel:</Text>
        {excelData && (
          <Text>{excelData}</Text>
        )}
        <Button title="Seleccionar Archivo Excel" onPress={pickDocument} />
      </View>
    );
  };
  
export default ExcelReader;
