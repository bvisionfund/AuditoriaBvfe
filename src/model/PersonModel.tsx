// PersonModel.ts
import { Model} from '@nozbe/watermelondb';
import {field, text} from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
  static table ='persons';
  @text('Name') Name: any;
  @text('Last_name') Last_name: any;
  @text('Age') Age: any;
}
