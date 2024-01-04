import {Platform} from 'react-native';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {mySchema} from '../src/model/Auditoria_DB_Schema';
import User_RC_Model from '../src/model/User_RC_Model';
import User_SAD_Model from '../src/model/User_SAD_Model';
import User_PPI_Model from '../src/model/User_PPI_Model';
import migrations from './model/migrations';
// ****************************** Data Base******************
const adapter = new SQLiteAdapter({
  schema: mySchema,
  //migrations,
  onSetUpError(error) {
    // Database failed to load -- offer the user to reload the app or log out
    console.log('db error', error);
  },
  dbName: 'Auditoria_DB',
  jsi: Platform.OS === 'ios',
});

const database = new Database({
  adapter,
  modelClasses: [User_RC_Model, User_SAD_Model, User_PPI_Model],
});

// Función para crear un nuevo registro USER_RC
export const onCreate = async (name: string, id: string, monto: number, tasa: number, actividad_economica: string) => {
  await database.write(async () => {
    const newUser = await database.get<User_RC_Model>('User_R_C').create((newPerson) => {
      newPerson.Nombre = name;
      newPerson.Id_user = id;
      newPerson.Monto = monto;
      newPerson.Tasa = tasa;
      newPerson.Actividad_Economica = actividad_economica;
    });
    console.log('Nuevo registro creado con éxito :D');
  });
};
// Función para crear un nuevo registro USER_RC
export const onCreate_USER_PPI = async ( id: string,name: string, Q1: string, Q2:string, Q3:string, Q4:string,Q5:string,Q6:string, Q7:string, Q8:string, Q9:string,Q10:string) => {
  await database.write(async () => {
    const newUser = await database.get<User_PPI_Model >('User_P_P_I').create((newPerson) => {
      newPerson.Id_user = id;
      newPerson.Nombre = name;
      newPerson.Miembros_hogar=Q1,
      newPerson.Miembros_mayores_11=Q2,
      newPerson.Equipamiento_hogar=Q3,
      newPerson.Instalaciones_bano_ducha=Q4,
      newPerson.Material_piso=Q5,
      newPerson.Ubicacion_servicio_higienico=Q6,
      newPerson.Electrodomesticos_cocina=Q7,
      newPerson.Plancha=Q8,
      newPerson.Televisores_color=Q9,
      newPerson.Cantidad_focos=Q10
     
    });
    console.log('Nuevo registro creado con éxito :D');
  });
};
// Función para crear un nuevo registro User_S_A_D
export const onCreate_User_SAD = async ( id: string, name: string, last_name:string, cellphone:string) => {
  await database.write(async () => {
    const newUser = await database.get<User_SAD_Model>('User_S_A_D').create((newPerson) => {
      newPerson.Id_user = id;
      newPerson.Nombres = name;
      newPerson.Apellidos = last_name;
      newPerson.Telefono = cellphone;
    });
    console.log('Nuevo registro creado con éxito :D');
  });
};
  
  //Read registers from User_RC
  /* export const onRead_personal_information = async () => {
    const allPosts = await database.get('INFORACIONPERSONAL').query().fetch();
    //console.log(allPosts);
    allPosts.map((post: InstanceType<typeof User_RC_Model>) => {
      console.log(post.Nombre);
    });
  }; */
  //Read registers from User_RC
  export const onRead = async () => {
    const allPosts = await database.get('User_R_C').query().fetch();
    //console.log(allPosts);
    allPosts.map((post: InstanceType<typeof User_RC_Model>) => {
      console.log(post.Nombre);
    });
  };
  // Read registers from User_SAD
  export const onRead_User_SAD = async () => {
    const allPosts = await database.get('User_S_A_D').query().fetch();
    //console.log(allPosts);
    allPosts.map((post: InstanceType<typeof User_SAD_Model>) => {
      console.log(post.Nombres);
    });
  };
  // Read registers from User_PPI
  export const onRead_User_PPI = async () => {
    const allPosts = await database.get('User_P_P_I').query().fetch();
    //console.log(allPosts);
    allPosts.map((post: InstanceType<typeof User_PPI_Model>) => {
      console.log(post.Nombre);
    });
  };





  // Función para eliminar todos los registros
  export const deleteAllRecords = async () => {
    await database.write(async () => {
      // Obtén todos los registros de la tabla 'persons'
      const allRecords = await database.get('User_R_C').query().fetch();
  
      // Marca cada registro como eliminado
      allRecords.forEach(async record => {
        await record.markAsDeleted();
      });
  
      // Ejecuta la eliminación en una transacción
      await database.batch();
  
      console.log('Todos los registros han sido marcados como eliminados.');
    });
  };

  // Función para eliminar todos los registros de User_SAD_Model
  export const deleteAllRecords_User_SAD = async () => {
    await database.write(async () => {
      // Obtén todos los registros de la tabla 'persons'
      const allRecords = await database.get('User_S_A_D').query().fetch();
  
      // Marca cada registro como eliminado
      allRecords.forEach(async record => {
        await record.markAsDeleted();
      });
  
      // Ejecuta la eliminación en una transacción
      await database.batch();
  
      console.log('Todos los registros han sido marcados como eliminados.');
    });
  };

  // Función para eliminar todos los registros de User_PPI_Model
  export const deleteAllRecords_User_PPI = async () => {
    await database.write(async () => {
      // Obtén todos los registros de la tabla 'persons'
      const allRecords = await database.get('User_P_P_I').query().fetch();
  
      // Marca cada registro como eliminado
      allRecords.forEach(async record => {
        await record.markAsDeleted();
      });
  
      // Ejecuta la eliminación en una transacción
      await database.batch();
  
      console.log('Todos los registros han sido marcados como eliminados.');
    });
  };
