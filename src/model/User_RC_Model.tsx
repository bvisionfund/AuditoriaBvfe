//User_RC_Model
import {Model} from '@nozbe/watermelondb';
import {field, text, readonly} from '@nozbe/watermelondb/decorators';

export default class User_RC_Model extends Model {
  static table = 'User_R_C';

  @field('Nombre') Nombre?: string;
  @field('Id_user') Id_user?: string;
  @field('Monto') Monto?: number;
  @field('Tasa') Tasa?: number;
  @field('Actividad_Economica') Actividad_Economica?: string;
}
