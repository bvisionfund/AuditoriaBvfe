import {Platform} from 'react-native';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {mySchema} from '../src/model/schema';
import Post from '../src/model/PersonModel';
import migrations from './model/migrations';
// ****************************** Data Base******************
const adapter = new SQLiteAdapter({
  schema: mySchema,
  migrations,

  onSetUpError(error) {
    // Database failed to load -- offer the user to reload the app or log out
    console.log('db error', error);
  },
  dbName: 'my db',
  jsi: Platform.OS === 'ios',
});

const database = new Database({
  adapter,
  modelClasses: [Post],
});

// Función para crear un nuevo registro
export const onCreate = async (name: string, lastName: string, age: number, cellphone: string, cedula: string) => {
  await database.write(async () => {
    // Utiliza el método create para agregar un nuevo registro
    await database.get('persons').create((newPerson: InstanceType<typeof Post>)=> {
      newPerson.Name = name;
      newPerson.Last_name = lastName;
      newPerson.Age = age;
      newPerson.Cellphone= cellphone;
      newPerson.PersonId=cedula; 
    });
    console.log('Nuevo registro creado con éxito.');
  });
};

//Read
export const onRead = async () => {
  const allPosts = await database.get('persons').query().fetch();
  console.log(allPosts);
  allPosts.map((post: InstanceType<typeof Post>) => {
    console.log(post.PersonId);
  });
};
// Función para eliminar todos los registros
export const deleteAllRecords = async () => {
  await database.write(async () => {
    // Obtén todos los registros de la tabla 'persons'
    const allRecords = await database.get('persons').query().fetch();

    // Marca cada registro como eliminado
    allRecords.forEach(async record => {
      await record.markAsDeleted();
    });

    // Ejecuta la eliminación en una transacción
    await database.batch();

    console.log('Todos los registros han sido marcados como eliminados.');
  });
};
