import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema= appSchema({
    version: 1,
    tables: [
      tableSchema({
        name: 'INFORACIONPERSONAL',
        columns:[
            {name: 'SECUENCIAL', type: 'number'},
            {name: 'NOMBRES', type:'string'},
            {name: 'APELLIDOS', type:'string'},
            {name: 'IDENTIFICACION', type:'string'},
            {name: 'AGENCIA', type:'string'},
            {name: 'GRUPO', type:'string'},
            {name: 'NEXPEDIENTE', type:'string'},
            {name: 'NCREDITO', type:'string'},
            {name: 'FECHADESEMBOLSO', type:'string'},
            {name: 'FECHAVENCIMINETO', type:'string'},
            {name: 'MONTO', type:'number'},
            {name: 'ESTADOCIVIL', type:'string'},
            {name: 'NOMBRECONYUGE', type:'string'},
            {name: 'MENORES18', type:'number'},
            {name: 'HIJOSPATROCINADOS', type:'number'},
            {name: 'DIRECCION', type:'string'},
            {name: 'TELEFONO', type:'string'},
            {name: 'GENERO', type:'string'},
            {name: 'ESTADO', type:'string'},
        ]
      })
    ]
  })