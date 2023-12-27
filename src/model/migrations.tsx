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
      toVersion: 2,
      steps: [
        // Define steps for migration to version 2
        addColumns({
          table: 'persons',
          columns: [
            { name: 'Cellphone', type: 'string' },
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
