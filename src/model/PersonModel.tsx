// PersonModel.ts
import {Model} from '@nozbe/watermelondb';
import {field, text, readonly} from '@nozbe/watermelondb/decorators';

export default class PersonModel extends Model {
  static table = 'persons';

  @field('Name') Name?: string;
  @field('Last_name') Last_name?: string;
  @field('Age') Age?: number;
}
