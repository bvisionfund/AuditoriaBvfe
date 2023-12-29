//User_PPI_Model
import {Model} from '@nozbe/watermelondb';
import {field, text, readonly} from '@nozbe/watermelondb/decorators';

export default class User_PPI_Model extends Model {
  static table = 'User_P_P_I';

  @field('Id_user') Id_user?: string;
  @field('Nombre') Nombre?: string;
  @field('Miembros_hogar') Miembros_hogar?: string;
  @field('Miembros_mayores_11') Miembros_mayores_11?: string;
  @field('Equipamiento_hogar') Equipamiento_hogar?: string;
  @field('Instalaciones_bano_ducha') Instalaciones_bano_ducha?: string;
  @field('Material_piso') Material_piso?: string;
  @field('Ubicacion_servicio_higienico') Ubicacion_servicio_higienico?: string;
  @field('Electrodomesticos_cocina') Electrodomesticos_cocina?: string;
  @field('Plancha') Plancha?: string;
  @field('Televisores_color') Televisores_color?: string;
  @field('Cantidad_focos') Cantidad_focos?: string;


}
