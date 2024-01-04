import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema= appSchema({
    version: 4,
    tables: [
      tableSchema({
          name: 'User_R_C',
          columns:[
              {name: 'Nombre', type: 'string'},
              {name: 'Id_user', type: 'string'},
              {name: 'Monto', type: 'number'},
              {name: 'Tasa', type: 'number'}, 
              {name: 'Actividad_Economica', type: 'string' }, 
          ]
      }),
      tableSchema({
        name:'User_S_A_D',
        columns:[
                {name: 'Id_user', type: 'string'},
                {name: 'Nombres', type: 'string'},
                {name: 'Apellidos', type: 'string'},
                {name: 'Telefono', type: 'string'},
        ]
      }),
      tableSchema({
        name: 'User_P_P_I',
        columns:[
            {name: 'Id_user', type: 'string'},
            {name: 'Nombre', type:'string'},
            {name: 'Miembros_hogar', type:'string'},
            {name: 'Miembros_mayores_11', type:'string'},
            {name: 'Equipamiento_hogar', type:'string'},
            {name: 'Instalaciones_bano_ducha', type:'string'},
            {name: 'Material_piso', type:'string'},
            {name: 'Ubicacion_servicio_higienico', type:'string'},
            {name: 'Electrodomesticos_cocina', type:'string'},
            {name: 'Plancha', type:'string'},
            {name: 'Televisores_color', type:'string'},
            {name: 'Cantidad_focos', type:'string'},
        ]
      }),
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
            {name: 'ESATADO', type:'string'},
        ]
      })
    ]
  })