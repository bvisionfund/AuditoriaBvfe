import {Platform} from 'react-native';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {mySchema} from '../src/model/Auditoria_DB_Schema';
import User_RC_Model from '../src/model/User_RC_Model';
import User_SAD_Model from '../src/model/User_SAD_Model';
import User_PPI_Model from '../src/model/User_PPI_Model';
// ****************************** Data Base******************
const adapter = new SQLiteAdapter({
  schema: mySchema,

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

// Función para crear un nuevo registro
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
  
  //Read
  export const onRead = async () => {
    const allPosts = await database.get('User_R_C').query().fetch();
    //console.log(allPosts);
    allPosts.map((post: InstanceType<typeof User_RC_Model>) => {
      console.log(post.Actividad_Economica);
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
