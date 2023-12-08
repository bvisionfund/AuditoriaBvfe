import React, { useEffect, useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import axios, { AxiosError } from 'axios';
import PushNotification from 'react-native-push-notification';
import { customStyles } from '../theme/customStyles';
import LogItem from '../components/LogItem';

interface LogItem {
  Secuencial: number;
  FechaMaquina: string;
  Mensaje: string;
  EsDeError: boolean;
}

export const CierreDia = () => {
  const [data, setData] = useState<LogItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        'http://172.16.20.222:8091/Logs/DevuelveCierreDia',
      );

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: LogItem[] = response.data;
      setData(result);

      // Verifica si algún dato tiene EsDeError true
      const hasError = result.some((item) => item.EsDeError);

      // Si hay error, muestra la notificación
      if (hasError) {
        showNotification();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error('AxiosError:', axiosError.toJSON());
        if (axiosError.response) {
          console.error('Response data:', axiosError.response.data);
          console.error('Response status:', axiosError.response.status);
          console.error('Response headers:', axiosError.response.headers);
        }

        setError('Error de red. Por favor, verifica tu conexión.');
      } else {
        console.error('Error fetching data:', error);
        setError('Error inesperado. Por favor, inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  const showNotification = () => {
    PushNotification.localNotification({
      title: '¡Alarma de Error!',
      message: 'Se ha detectado un error en los datos.',
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ScrollView
      contentContainerStyle={[
        customStyles.container,
        darkMode && customStyles.darkModeContainer,
      ]}>
      <Text style={[customStyles.title, darkMode && customStyles.darkModeText]}>
        Log Cierre de Fin de Día:
      </Text>
      {loading && (
        <Text
          style={[
            customStyles.loadingText,
            darkMode && customStyles.darkModeText,
          ]}>
          Cargando...
        </Text>
      )}
      {error && (
        <Text
          style={[
            customStyles.errorText,
            darkMode && customStyles.darkModeText,
          ]}>
          {error}
        </Text>
      )}
      {data && (
        <View style={customStyles.dataContainer}>
          {data.map((item) => (
            <LogItem key={item.Secuencial} logItem={item} darkMode={darkMode} />
          ))}
        </View>
      )}
      <Button title="Actualizar" onPress={handleRefresh} />
      {/* <View style={{padding: 20}}>
        <Button
          title={darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          onPress={toggleDarkMode}
        />
      </View> */}
    </ScrollView>
  );
};
