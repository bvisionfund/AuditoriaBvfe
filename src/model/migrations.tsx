/* Schema migrations is the mechanism by which you can add new tables 
and columns to the database in a backward-compatible way.

Without migrations, if a user of your app upgrades from one version to 
another, their local database will be cleared at launch, and they will 
lose all their data.

⚠️ Always use migrations! */


import { schemaMigrations } from '@nozbe/watermelondb/Schema/migrations'

// migrations.tsx
import { addColumns } from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
  migrations: [
    {
      toVersion: 4,
      steps: [
        // Agrega la nueva tabla
        addTable({
          name: 'INFORACIONPERSONAL',
          columns: [
            { name: 'SECUENCIAL', type: 'number' },
            { name: 'NOMBRES', type: 'string' },
            { name: 'APELLIDOS', type: 'string' },
            { name: 'IDENTIFICACION', type: 'string' },
            { name: 'AGENCIA', type: 'string' },
            { name: 'GRUPO', type: 'string' },
            { name: 'NEXPEDIENTE', type: 'string' },
            { name: 'NCREDITO', type: 'string' },
            { name: 'FECHADESEMBOLSO', type: 'string' },
            { name: 'FECHAVENCIMINETO', type: 'string' },
            { name: 'MONTO', type: 'number' },
            { name: 'ESTADOCIVIL', type: 'string' },
            { name: 'NOMBRECONYUGE', type: 'string' },
            { name: 'MENORES18', type: 'number' },
            { name: 'HIJOSPATROCINADOS', type: 'number' },
            { name: 'DIRECCION', type: 'string' },
            { name: 'TELEFONO', type: 'string' },
            { name: 'GENERO', type: 'string' },
            { name: 'ESATADO', type: 'string' },
          ],
        }),
      ],
    },
    {
      toVersion: 3,
      steps: [
        addColumns({
          table: 'persons',
          columns: [{ name: 'PersonId', type: 'string' }],
        }),
      ],
    },
  ],
});
function addTable(arg0: { name: string; columns: { name: string; type: string; }[]; }): import("@nozbe/watermelondb/Schema/migrations").MigrationStep {
  throw new Error('Function not implemented.');
}

