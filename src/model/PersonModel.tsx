// PersonModel.ts
/* import { Model, field, action } from '@nozbe/watermelondb';
import { TableName } from '@nozbe/watermelondb/utils/commonTypes';

class PersonModel extends Model {
  static table: TableName = 'Persons';

  @field('Name') name!: string;
  @field('Last_name') lastName!: string;
  @field('Age') age!: number;

  // Example action
  @action async updatePerson(newData: { name?: string; lastName?: string; age?: number }) {
    await this.update((record) => {
      if (newData.name) record.name = newData.name;
      if (newData.lastName) record.lastName = newData.lastName;
      if (newData.age) record.age = newData.age;
    });
  }
}

export default PersonModel; */
