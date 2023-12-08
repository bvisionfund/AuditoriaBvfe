import React from 'react';
import {View, Text} from 'react-native';
import {customStyles} from '../theme/customStyles';
import moment from 'moment';
import 'moment/locale/es';
interface Props {
  logItem: {
    FechaMaquina: string;
    Mensaje: string;
    EsDeError: boolean;
  };
  darkMode: boolean;
}

const LogItem: React.FC<Props> = ({logItem, darkMode}) => {
    const colorRojo ='rgba(255, 0, 0, 0.4)';
    const colorVerde ='rgba(0, 255, 0, 0.4)';
  return (
    <View>
      {logItem.EsDeError ? (
        <View style={[customStyles.logItem, {backgroundColor: colorRojo}]}>
          <Text
            style={[customStyles.text]}>
            {`${moment(logItem.FechaMaquina).format('LLLL')}`}
          </Text>
          <Text
            style={[customStyles.text]}>
            {`${logItem.Mensaje}`}
          </Text>
        </View>
      ) : (
        <View style={[customStyles.logItem, {backgroundColor: colorVerde}]}>
          <Text
            style={[customStyles.text]}>
            {`${moment(logItem.FechaMaquina).format('LLLL')}`}
          </Text>

          <Text
            style={[customStyles.text]}>
            {`${logItem.Mensaje}`}
          </Text>
        </View>
      )}
    </View>
  );
};

export default LogItem;
