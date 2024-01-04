import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {Modal,SafeAreaView,Text,View,TouchableOpacity,Image,TextInput, ScrollView } from 'react-native';
import appStyles, { Colors } from '../Styles/appStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUpload, faMagnifyingGlass, faPerson,faPersonDress,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/homeStack';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}
const Questions:  React.FC<LoginProps> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [showInfoButton, setShowInfoButton] = useState(false);
    const showSaveButton = !modalVisible && !showInfoButton;
    const showViewButton = !modalVisible && showInfoButton;
    const [jsonData, setJsonData] = useState('');
    /* **************** States to input text **************** */
    const [agencia, setagencia] = useState('');
    const [asesor, setasesor] = useState('');
    const [fecha, setfecha] = useState('');
    const [revisado, setrevisado] = useState('');
    const [grupo, setgrupo] = useState('');
    const [expediente, setexpediente] = useState('');
    const [credito, setcredito] = useState('');
    const [fecha_desembolso, setfecha_desembolso] = useState('');
    const [fecha_vencimiento, setfecha_vencimiento] = useState('');
    const [clientes, setclientes] = useState('');
    const [monto, setmonto] = useState('');
    const [identificacion, setidentificacion] = useState('');
    const [estado_civil, setestado_civil] = useState('');
    const [nombre_conyuge, setnombre_conyuge] = useState('');
    const [menores_18, setmenores_18] = useState('');
    const [hijos_patrocinados, sethijos_patrocinados] = useState('');
    const [direccion, setdireccion] = useState('');
    const [telefono, settelefono] = useState('');

    /****************** States to questions****************************/  
    const [selectedOptionQ1, setSelectedOptionQ1] = useState<string | null>(null); 
    const [observationQ1, setObservationQ1] = useState('');
    const [selectedOptionQ2, setSelectedOptionQ2] = useState<string | null>(null); 
    const [observationQ2, setObservationQ2] = useState('');
    const [selectedOptionQ3, setSelectedOptionQ3] = useState<string | null>(null); 
    const [observationQ3, setObservationQ3] = useState('');
    const [selectedOptionQ4, setSelectedOptionQ4] = useState<string | null>(null); 
    const [observationQ4, setObservationQ4] = useState('');
    const [selectedOptionQ5, setSelectedOptionQ5] = useState<string | null>(null); 
    const [observationQ5, setObservationQ5] = useState('');
    const [selectedOptionQ6, setSelectedOptionQ6] = useState<string | null>(null); 
    const [observationQ6, setObservationQ6] = useState('');
    const [selectedOptionQ7, setSelectedOptionQ7] = useState<string | null>(null); 
    const [observationQ7, setObservationQ7] = useState('');
    const [selectedOptionQ8, setSelectedOptionQ8] = useState<string | null>(null); 
    const [observationQ8, setObservationQ8] = useState('');
    const [selectedOptionQ9, setSelectedOptionQ9] = useState<string | null>(null); 
    const [observationQ9, setObservationQ9] = useState('');
    const [selectedOptionQ10, setSelectedOptionQ10] = useState<string | null>(null); 
    const [observationQ10, setObservationQ10] = useState('');
    const [selectedOptionQ11, setSelectedOptionQ11] = useState<string | null>(null); 
    const [observationQ11, setObservationQ11] = useState('');
    const [selectedOptionQ12, setSelectedOptionQ12] = useState<string | null>(null); 
    const [observationQ12, setObservationQ12] = useState('');
    const [selectedOptionQ13, setSelectedOptionQ13] = useState<string | null>(null); 
    const [observationQ13, setObservationQ13] = useState('');
    const [selectedOptionQ14, setSelectedOptionQ14] = useState<string | null>(null); 
    const [observationQ14, setObservationQ14] = useState('');
    const [selectedOptionQ15, setSelectedOptionQ15] = useState<string | null>(null); 
    const [observationQ15, setObservationQ15] = useState('');
    const [selectedOptionQ16, setSelectedOptionQ16] = useState<string | null>(null); 
    const [observationQ16, setObservationQ16] = useState('');
    const [selectedOptionQ17, setSelectedOptionQ17] = useState<string | null>(null); 
    const [observationQ17, setObservationQ17] = useState('');
    const [selectedOptionQ18, setSelectedOptionQ18] = useState<string | null>(null); 
    const [observationQ18, setObservationQ18] = useState('');
    const [selectedOptionQ19, setSelectedOptionQ19] = useState<string | null>(null); 
    const [observationQ19, setObservationQ19] = useState('');
    const [selectedOptionQ20, setSelectedOptionQ20] = useState<string | null>(null); 
    const [observationQ20, setObservationQ20] = useState('');
    const [selectedOptionQ21, setSelectedOptionQ21] = useState<string | null>(null); 
    const [observationQ21, setObservationQ21] = useState('');
    const [selectedOptionQ22, setSelectedOptionQ22] = useState<string | null>(null); 
    const [observationQ22, setObservationQ22] = useState('');
    const [selectedOptionQ23, setSelectedOptionQ23] = useState<string | null>(null); 
    const [observationQ23, setObservationQ23] = useState('');
    // ********************* Options to multiple choice*************
    const options = [
        { label: 'Seleccionar', value: '' },
        { label: 'Si', value: 'Si' },
        { label: 'No', value: 'No' },
        { label: 'N/A', value: 'N/A' },
      ];

    //Save information in JSON
    const saveInformation = async () => {
        const data = {
            personalInformation: {
                agencia,
                asesor,
                fecha,
                revisado,
                grupo,
                expediente,
                credito,
                fecha_desembolso,
                fecha_vencimiento,
                clientes,
                monto,
                identificacion,
                estado_civil,
                nombre_conyuge,
                menores_18,
                hijos_patrocinados,
                direccion,
                telefono,
            },
            questions: {
                Q1: { selectedOption: selectedOptionQ1, observation: observationQ1 },
                Q2: { selectedOption: selectedOptionQ2, observation: observationQ2 },
                Q3: { selectedOption: selectedOptionQ3, observation: observationQ3 },
                Q4: { selectedOption: selectedOptionQ4, observation: observationQ4 },
                Q5: { selectedOption: selectedOptionQ5, observation: observationQ5 },
                Q6: { selectedOption: selectedOptionQ6, observation: observationQ6 },
                Q7: { selectedOption: selectedOptionQ7, observation: observationQ7 },
                Q8: { selectedOption: selectedOptionQ8, observation: observationQ8 },
                Q9: { selectedOption: selectedOptionQ9, observation: observationQ9 },
                Q10: { selectedOption: selectedOptionQ10, observation: observationQ10 },
                Q11: { selectedOption: selectedOptionQ11, observation: observationQ11 },
                Q12: { selectedOption: selectedOptionQ12, observation: observationQ12 },
                Q13: { selectedOption: selectedOptionQ13, observation: observationQ13 },
                Q14: { selectedOption: selectedOptionQ14, observation: observationQ14 },
                Q15: { selectedOption: selectedOptionQ15, observation: observationQ15 },
                Q16: { selectedOption: selectedOptionQ16, observation: observationQ16 },
                Q17: { selectedOption: selectedOptionQ17, observation: observationQ17 },
                Q18: { selectedOption: selectedOptionQ18, observation: observationQ18 },
                Q19: { selectedOption: selectedOptionQ19, observation: observationQ19 },
                Q20: { selectedOption: selectedOptionQ20, observation: observationQ20 },
                Q21: { selectedOption: selectedOptionQ21, observation: observationQ21 },
                Q22: { selectedOption: selectedOptionQ22, observation: observationQ22 },
                Q23: { selectedOption: selectedOptionQ23, observation: observationQ23 },
            },
        };
        try {
            //Transfor to Json
            const jsonString = JSON.stringify(data);
            console.log("Entro a la funcion de guardar informacion");
            // Save the Json locally
            await AsyncStorage.setItem('savedInformation', jsonString);
            // Update state
            setJsonData(jsonString);
            // See the Json
            //console.log(jsonString);
          } catch (error) {
            console.error('Error al guardar la información:', error);
          }
        };
        const ViewInfo = () => {
            console.log(jsonData);
          }
          const resetFields = () => {
            setagencia('');setasesor('');setfecha('');setrevisado('');setgrupo('');
            setexpediente('');setcredito('');setfecha_desembolso('');setfecha_vencimiento('');
            setclientes('');setmonto('');setidentificacion('');setestado_civil('');setnombre_conyuge('');
            setmenores_18('');sethijos_patrocinados('');setdireccion('');settelefono('');
            setSelectedOptionQ1('');setObservationQ1('');setSelectedOptionQ2('');setObservationQ2('');
            setSelectedOptionQ3('');setObservationQ3('');setSelectedOptionQ4('');setObservationQ4('');
            setSelectedOptionQ5('');setObservationQ5('');setSelectedOptionQ6('');setObservationQ6('');
            setSelectedOptionQ7('');setObservationQ7('');setSelectedOptionQ8('');setObservationQ8('');
            setSelectedOptionQ9('');setObservationQ9('');setSelectedOptionQ10('');setObservationQ10('');
            setSelectedOptionQ11('');setObservationQ11('');setSelectedOptionQ12('');setObservationQ12('');
            setSelectedOptionQ13('');setObservationQ13('');setSelectedOptionQ14('');setObservationQ14('');
            setSelectedOptionQ15('');setObservationQ15('');setSelectedOptionQ16('');setObservationQ16('');
            setSelectedOptionQ17('');setObservationQ17('');setSelectedOptionQ18('');setObservationQ18('');
            setSelectedOptionQ19('');setObservationQ19('');setSelectedOptionQ20('');setObservationQ20('');
            setSelectedOptionQ21('');setObservationQ21('');setSelectedOptionQ22('');setObservationQ22('');
            setSelectedOptionQ23('');setObservationQ23('')
          };
    return (
    <SafeAreaView style={{ ...appStyles.container_Gradient, backgroundColor: Colors.background_questions }}>
        <ScrollView>
            {/* ************** Container of personal information ************************* */}
            <View style={appStyles.container_information}>
                <View style={appStyles.container_info}>
                    <Text style={appStyles.txt_title_personal_info}>Informacion Personal</Text>
                    <TouchableOpacity style={appStyles.container_location}>
                        <FontAwesomeIcon icon={faLocationDot} size={35} color="#000000" />
                        <Text style={appStyles.txt_location}>Ver ubicación</Text>
                    </TouchableOpacity>
                    <Image source={require('../images/User.png')} style={appStyles.circle_image}/>   
                </View>
            </View>
            <View style={appStyles.content}>
                <Text style={appStyles.text_question}>Agencia</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={agencia}
                    onChangeText={(text) => setagencia(text)}
                />
                <Text style={appStyles.text_question}>Asesor</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={asesor}
                    onChangeText={(text) => setasesor(text)}
                />
                <Text style={appStyles.text_question}>Fecha</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={fecha}
                    onChangeText={(text) => setfecha(text)}
                />
                <Text style={appStyles.text_question}>Revisado por</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={revisado}
                    onChangeText={(text) => setrevisado(text)}
                />
                <Text style={appStyles.text_question}>Nombre del Grupo/ Banca</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={grupo}
                    onChangeText={(text) => setgrupo(text)}
                />
                <Text style={appStyles.text_question}>N° de Expediente</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={expediente}
                    onChangeText={(text) => setexpediente(text)}
                    keyboardType="phone-pad"
                />
                <Text style={appStyles.text_question}>N° Crédito</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={credito}
                    onChangeText={(text) => setcredito(text)}
                    keyboardType="phone-pad"
                />
                <Text style={appStyles.text_question}>Fecha desembolso</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={fecha_desembolso}
                    onChangeText={(text) => setfecha_desembolso(text)}
                />
                <Text style={appStyles.text_question}>Fecha vencimiento</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={fecha_vencimiento}
                    onChangeText={(text) => setfecha_vencimiento(text)}
                />
                <Text style={appStyles.text_question}>Clientes</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={clientes}
                    onChangeText={(text) => setclientes(text)}
                />
                <Text style={appStyles.text_question}>Monto</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={monto}
                    onChangeText={(text) => setmonto(text)}
                    keyboardType="phone-pad"
                />
                <Text style={appStyles.text_question}>Identificación</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={identificacion}
                    onChangeText={(text) => setidentificacion(text)}
                    keyboardType="phone-pad"
                />
                <Text style={appStyles.text_question}>Estado Civil</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={estado_civil}
                    onChangeText={(text) => setestado_civil(text)}
                />
                <Text style={appStyles.text_question}>Nombre del Conyuge</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={nombre_conyuge}
                    onChangeText={(text) => setnombre_conyuge(text)}
                />
                <Text style={appStyles.text_question}>N° menores de 18 años</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={menores_18}
                    onChangeText={(text) => setmenores_18(text)}
                    keyboardType="phone-pad"
                />
                <Text style={appStyles.text_question}>N° de hijos patrocinados</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={hijos_patrocinados}
                    onChangeText={(text) => sethijos_patrocinados(text)}
                    keyboardType="phone-pad"
                />
                <Text style={appStyles.text_question}>Dirección</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={direccion}
                    onChangeText={(text) => setdireccion(text)}
                />
                <Text style={appStyles.text_question}>N° de Teléfono</Text>
                <TextInput
                    style={appStyles.input_answer}
                    value={telefono}
                    onChangeText={(text) => settelefono(text)}
                    keyboardType="phone-pad"                
                />
                {/* ************** Container of personal information ************************* */}
                <View style={appStyles.container_information}>
                    <View style={appStyles.container_info}>
                        <View style={appStyles.title_line}></View>
                        <Text style={appStyles.txt_title_encuesta}>Encuesta</Text>
                        <View style={appStyles.title_line}></View> 
                    </View>
                </View>
                {/* ****************Quesions ******************************** */}
                <Text style={appStyles.text_question}>A Se autentificó la identidad del cliente con los detalles del archivo (documento de fotografía / ID)</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ1(value)}
                    value={selectedOptionQ1}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ1}
                    onChangeText={(text) => setObservationQ1(text)}
                />
                {/* 2 */}
                <Text style={appStyles.text_question}>B.-  Préstamo está de acuerdo con el cliente la confirmación de préstamos monto, tasa de interés y la tenencia de préstamo, la cantidad de pago, etc.
                Préstamo recibió directamente el cliente, firmó los documentos.
                ¿Conoce Ud. sobre los seguros que tiene la Institución?
                </Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ2(value)}
                    value={selectedOptionQ2}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ2}
                    onChangeText={(text) => setObservationQ2(text)}
                />
                {/* 3 */}
                <Text style={appStyles.text_question}>C.- Compruebe si el cliente recibió la visita del Asesor  de Crédito/ Supervisor/Jefe de Agencia antes de desembolso y confirmar que visitó después de desembolso</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ3(value)}
                    value={selectedOptionQ3}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ3}
                    onChangeText={(text) => setObservationQ3(text)}
                />
                {/* 4 */}
                <Text style={appStyles.text_question}>D.- Pago no autorizado hecho al Asesor de Crédito y/o otros para obtener el préstamo. Qué cargos pagó para obtener el préstamo. </Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ4(value)}
                    value={selectedOptionQ4}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ4}
                    onChangeText={(text) => setObservationQ4(text)}
                />
                {/* 5 */}
                <Text style={appStyles.text_question}>E.- ¿El calendario de pagos que indica el cliente es el mismo del sistema?</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ5(value)}
                    value={selectedOptionQ5}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ5}
                    onChangeText={(text) => setObservationQ5(text)}
                />
                {/* 6 */}
                <Text style={appStyles.text_question}>F.- ¿Cómo hace el pago el cliente, es decir, para el Banco?  O al Asesor  de Crédito? ¿Para el líder del Grupo / tesorero? ¿El cliente tiene los recibos?</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ6(value)}
                    value={selectedOptionQ6}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ6}
                    onChangeText={(text) => setObservationQ6(text)}
                />
                {/* 7 */}
                <Text style={appStyles.text_question}>G.- Compruebe los registros de pago de los clientes con los registros del sistema. Conoce  a los compañeros de grupo</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ7(value)}
                    value={selectedOptionQ7}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ7}
                    onChangeText={(text) => setObservationQ7(text)}
                />
                {/* 8 */}
                <Text style={appStyles.text_question}>H.- Si es posible, compruebe que la garantía prestada por el préstamo que está disponible</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ8(value)}
                    value={selectedOptionQ8}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ8}
                    onChangeText={(text) => setObservationQ8(text)}
                />
                {/* 9 */}
                <Text style={appStyles.text_question}>I.- Consulte con el cliente el uso final del préstamo y si coincide con la solicitud de préstamo. Confirme que el cliente no pidió prestado para otros,  para uso personal. En caso afirmativo explique.</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ9(value)}
                    value={selectedOptionQ9}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ9}
                    onChangeText={(text) => setObservationQ9(text)}
                />
                {/* 10 */}
                <Text style={appStyles.text_question}>J.- Cotejar el número de niños (menores de 18 años) que viven con el cliente frente a los registros del sistema</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ10(value)}
                    value={selectedOptionQ10}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ10}
                    onChangeText={(text) => setObservationQ10(text)}
                />
                {/* 11 */}
                <Text style={appStyles.text_question}>K.- Cotejar el número de personas que el cliente emplea con los registros del sistema</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ11(value)}
                    value={selectedOptionQ11}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ11}
                    onChangeText={(text) => setObservationQ11(text)}
                />
                {/* 12 */}
                <Text style={appStyles.text_question}>L.- Compruebe si el cliente conoce a la institución, sus actividades,   es consciente de a quién contactar en caso de que él / ella tiene un problema de problema / servicio. También puede ver si él / ella tenía un problema en el pasado. En caso afirmativo, dar comentario</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ12(value)}
                    value={selectedOptionQ12}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ12}
                    onChangeText={(text) => setObservationQ12(text)}
                />
                {/* 13 */}
                <Text style={appStyles.text_question}>M.-  Compruebe que el cliente emplee a niños (menores de 18 años), lo que les impide ir a la escuela.</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ13(value)}
                    value={selectedOptionQ13}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ13}
                    onChangeText={(text) => setObservationQ13(text)}
                />
                {/* 14 */}
                <Text style={appStyles.text_question}>N.- ¿Se adapta cliente el perfil de desempeño social? Campesinos pobres con niños, Rural</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ14(value)}
                    value={selectedOptionQ14}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ14}
                    onChangeText={(text) => setObservationQ14(text)}
                />
                {/* 15 */}
                <Text style={appStyles.text_question}>O.- Si se reestructuró el préstamo, el cliente es consciente, él / ella lo solicitaron</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ15(value)}
                    value={selectedOptionQ15}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ15}
                    onChangeText={(text) => setObservationQ15(text)}
                />
                {/* 16 */}
                <Text style={appStyles.text_question}>P.-  Verifique si el cliente está  satisfecho  con la institución.
                ¿Qué tan satisfecho se encuentra con la atención recibida en el Banco?
                Excelente                  Muy Buena          Buena          Regular              Mala
                (Compruebe si el Asesor  de Crédito ha sido cortés Revise las quejas registran para las prácticas abusivas de cobranza.)
                </Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ16(value)}
                    value={selectedOptionQ16}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ16}
                    onChangeText={(text) => setObservationQ16(text)}
                />
                {/* 17 */}
                <Text style={appStyles.text_question}>Q.- ¿Conoce usted como presentar una queja o reclamo?</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ17(value)}
                    value={selectedOptionQ17}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ17}
                    onChangeText={(text) => setObservationQ17(text)}
                />
                {/* 18 */}
                <Text style={appStyles.text_question}>R.- ¿El asesor dio  información al cliente antes de  tomar el préstamo? Si un préstamo es de grupo, verificar la comprensión sobre el pago por los demás en el grupo que no pagan.</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ18(value)}
                    value={selectedOptionQ18}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ18}
                    onChangeText={(text) => setObservationQ18(text)}
                />
                {/* 19 */}
                <Text style={appStyles.text_question}>S.- Qué problema está teniendo para pagar el préstamo (si no ha pagado a tiempo) </Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ19(value)}
                    value={selectedOptionQ19}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ19}
                    onChangeText={(text) => setObservationQ19(text)}
                />
                {/* 20 */}
                <Text style={appStyles.text_question}>T.- Existe algún otro miembro de hogar que tenga préstamo con la institución, porqué monto. </Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ20(value)}
                    value={selectedOptionQ20}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ20}
                    onChangeText={(text) => setObservationQ20(text)}
                />
                {/* 21 */}
                <Text style={appStyles.text_question}>¿Usted tiene cuenta de ahorros en la Institución?</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ21(value)}
                    value={selectedOptionQ21}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ21}
                    onChangeText={(text) => setObservationQ21(text)}
                />
                {/* 22 */}
                <Text style={appStyles.text_question}>¿Conoce el saldo  de su cuenta (aproximado)?</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ22(value)}
                    value={selectedOptionQ22}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ22}
                    onChangeText={(text) => setObservationQ22(text)}
                />
                {/* 23 */}
                <Text style={appStyles.text_question}>¿Con que frecuencia  deposita y/o hace retiros de su cuenta?</Text>
                <View style={appStyles.optionsContainer}>
                    <RNPickerSelect
                    placeholder={{}}
                    items={options}
                    onValueChange={(value) => setSelectedOptionQ23(value)}
                    value={selectedOptionQ23}
                    />
                </View>
                <Text style={appStyles.text_question}>Observación:</Text>
                <TextInput
                    style={appStyles.input_answer}
                    multiline
                    value={observationQ23}
                    onChangeText={(text) => setObservationQ23(text)}
                />
                {/* ******* Button to save information********* */}
                {showSaveButton && (
                    <TouchableOpacity
                    style={appStyles.loginButton}
                    onPress={() => {
                        setModalVisible(true);
                        setShowInfoButton(true);
                        saveInformation();
                        resetFields();
                    }}>
                    <Text style={appStyles.buttonText}>Guardar información</Text>
                    </TouchableOpacity>
                )}
                {/* ******* Button to save information********* */}
                {showViewButton && (
                    <TouchableOpacity
                    style={appStyles.loginButton}
                    onPress={ViewInfo}>
                    <Text style={appStyles.buttonText}>Ver información</Text>
                    </TouchableOpacity>
                )}
                {/* *************Modal ******************** */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                        setShowInfoButton(false); 
                    }}>
                    <View style={appStyles.modalContainer}>
                        <View style={appStyles.modalContent}>
                            <Image source={require('../images/circle_check.png')} style={appStyles.icon_chechk}></Image>
                            <Text style={appStyles.txt_modal}>La información se guardo correctamente.</Text>
                            <TouchableOpacity 
                            style={appStyles.btn_container_modal}
                            onPress={() => setModalVisible(false)}>
                            <Text style={appStyles.buttonText}>Aceptar</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>    
    </SafeAreaView>
    );
};

export default Questions;