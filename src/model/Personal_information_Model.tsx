//Personal_Information_Model
import {Model} from '@nozbe/watermelondb';
import {field, text, readonly} from '@nozbe/watermelondb/decorators';

export default class Personal_Information_Model extends Model {
  static table = 'INFORACIONPERSONAL';

  @field('SECUENCIAL') SECUENCIAL?: string;
  @field('NOMBRES') NOMBRES?: string;
  @field('APELLIDOS') APELLIDOS?: string;
  @field('IDENTIFICACION') IDENTIFICACION?: string;
  @field('AGENCIA') AGENCIA?: string;
  @field('GRUPO') GRUPO?: string;
  @field('NEXPEDIENTE') NEXPEDIENTE?: string;
  @field('NCREDITO') NCREDITO?: string;
  @field('FECHADESEMBOLSO') FECHADESEMBOLSO?: string;
  @field('FECHAVENCIMINETO') FECHAVENCIMINETO?: string;
  @field('MONTO') MONTO?: number;
  @field('ESTADOCIVIL') ESTADOCIVIL?: string;
  @field('NOMBRECONYUGE') NOMBRECONYUGE?: string;
  @field('MENORES18') MENORES18?: number;
  @field('HIJOSPATROCINADOS') HIJOSPATROCINADOS?: number;
  @field('DIRECCION') DIRECCION?: string;
  @field('TELEFONO') TELEFONO?: string;
  @field('GENERO') GENERO?: string;
  @field('ESATADO') ESATADO?: string;


}