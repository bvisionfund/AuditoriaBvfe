import {Platform} from 'react-native';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {mySchema} from '../src/model/Schema_Auditoria_DB';
import Personal_Information_Model from '../src/model/Personal_information_Model';
import migrations from './model/migrations';
import { Q } from '@nozbe/watermelondb'
// ****************************** Data Base******************
const adapter = new SQLiteAdapter({
  schema: mySchema,
  //migrations,
  onSetUpError(error) {
    // Database failed to load -- offer the user to reload the app or log out
    console.log('db error', error);
  },
  dbName: 'DB_Auditoria',
  jsi: Platform.OS === 'ios',
});

const database = new Database({
  adapter,
  modelClasses: [Personal_Information_Model],
});

// Función para crear un nuevo registro USER_RC
export const onCreate_personal_information = async (secuencial: number, nombres: string, apellidos:string, identificacion: string, agencia: string,
    grupo:string, nexpediente: string, ncredito:string, fechadesembolso: string, fechavencimineto: string, monto: number, estadocivil: string, nombreconyuge: string, menores18: number, hijospatrocinados: number,
    direccion: string, telefono: string, genero: string, estado: string) => {
    await database.write(async () => {
      const newUser = await database.get<Personal_Information_Model>('INFORACIONPERSONAL').create((newPerson) => {
        newPerson.SECUENCIAL = secuencial;
        newPerson.NOMBRES = nombres;
        newPerson.APELLIDOS = apellidos;
        newPerson.IDENTIFICACION = identificacion;
        newPerson.AGENCIA = agencia;
        newPerson.GRUPO = grupo;
        newPerson.NEXPEDIENTE = nexpediente;
        newPerson.NCREDITO = ncredito;
        newPerson.FECHADESEMBOLSO = fechadesembolso;
        newPerson.FECHAVENCIMINETO = fechavencimineto;
        newPerson.MONTO = monto;
        newPerson.ESTADOCIVIL = estadocivil;
        newPerson.NOMBRECONYUGE = nombreconyuge;
        newPerson.MENORES18 = menores18;
        newPerson.HIJOSPATROCINADOS = hijospatrocinados;
        newPerson.DIRECCION = direccion;
        newPerson.TELEFONO = telefono;
        newPerson.GENERO = genero;
        newPerson.ESTADO = estado;
      });
      console.log('Nuevo registro creado con éxito :D');
    });
  };

export const onRead_personal_information = async () => {
    const allPosts = await database.get('INFORACIONPERSONAL').query().fetch();
    console.log(allPosts);
    allPosts.map((post: InstanceType<typeof Personal_Information_Model>) => {
      console.log(post.SECUENCIAL);
    });
  };
  export const deleteAllRecords = async () => {
    await database.write(async () => {
      // Obtén todos los registros de la tabla 'persons'
      const allRecords = await database.get('INFORACIONPERSONAL').query().fetch();
  
      // Marca cada registro como eliminado
      allRecords.forEach(async record => {
        await record.markAsDeleted();
      });
  
      // Ejecuta la eliminación en una transacción
      await database.batch();
  
      console.log('Todos los registros han sido marcados como eliminados.');
    });
  };
  //**************Funcion para las preguntas************** */ 
  export const Information_User_Questions = async (numero_identificacion: string): Promise<{
    AGENCIA: string;
    GRUPO: string;
    NEXPEDIENTE: string;
    NCREDITO: string;
    FECHADESEMBOLSO: string;
    FECHAVENCIMINETO: string;
    NOMBRES: string;
    MONTO: number;
    IDENTIFICACION: string;
    ESTADOCIVIL: string;
    NOMBRECONYUGE: string;
    MENORES18:number;
    HIJOSPATROCINADOS: number;
    DIRECCION:string,
    TELEFONO: string;
  }[]> => {
    const records = await database.get('INFORACIONPERSONAL').query(Q.where('IDENTIFICACION', numero_identificacion)).fetch();
  
    return records.map((record: InstanceType<typeof Personal_Information_Model>) => ({
      AGENCIA: record.AGENCIA || '',
      GRUPO: record.GRUPO || '', 
      NEXPEDIENTE: record.NEXPEDIENTE || '',
      NCREDITO: record.NCREDITO || '',
      FECHADESEMBOLSO: record.FECHADESEMBOLSO || '',
      FECHAVENCIMINETO: record.FECHAVENCIMINETO || '',
      NOMBRES: record.NOMBRES || '',
      MONTO: record.MONTO || 0,
      IDENTIFICACION: record.IDENTIFICACION || '',
      ESTADOCIVIL: record.ESTADOCIVIL || '',
      NOMBRECONYUGE: record.NOMBRECONYUGE || '',
      MENORES18: record.MENORES18 || 0,
      HIJOSPATROCINADOS: record.HIJOSPATROCINADOS || 0,
      DIRECCION: record. DIRECCION || '',
      TELEFONO: record.TELEFONO || '',
    }));
  };

  //***************************Funcion para informacion de buscar usuarios************** */
  export const Information_User = async (): Promise<{
    NOMBRES: string;
    APELLIDOS: string;
    GENERO: string;
    ESTADO: string;
    IDENTIFICACION: string;
    TELEFONO: string;
  }[]> => {
    const records = await database.get('INFORACIONPERSONAL').query().fetch();
  
    return records.map((record: InstanceType<typeof Personal_Information_Model>) => ({
      NOMBRES: record.NOMBRES || '', 
      APELLIDOS: record.APELLIDOS || '',
      GENERO: record.GENERO || '',
      ESTADO: record.ESTADO || '',
      IDENTIFICACION: record.IDENTIFICACION || '',
      TELEFONO: record.TELEFONO || '',
    }));
  };