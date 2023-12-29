//User_SAD_Model
import {Model} from '@nozbe/watermelondb';
import {field, text, readonly} from '@nozbe/watermelondb/decorators';

export default class User_SAD_Model extends Model {
  static table = 'User_S_A_D';

  @field('Id_user') Id_user?: string;
  @field('Nombres') Nombres?: string;
  @field('Apellidos') Apellidos?: string;
  @field('Telefono') Telefono?: string;

}
