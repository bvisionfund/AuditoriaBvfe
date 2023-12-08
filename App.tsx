import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import {CierreDia} from './src/screens/CierreDia';

function App(): JSX.Element {
  // useEffect(() => {
  //   // Configurar notificaciones al montar el componente
  //   configureNotifications();
  // }, []);
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CierreDia />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
function configureNotifications() {
  throw new Error('Function not implemented.');
}

