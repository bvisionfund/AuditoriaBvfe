/* When using WatermelonDB, you're dealing with Models and Collections. 
However, underneath Watermelon sits an underlying database 
(SQLite or LokiJS) which speaks a different language: tables and columns. 
Together, those are called a database schema and we must define it first. */

import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema= appSchema({
  version: 3,
  tables: [
    tableSchema({
        name: 'persons',
        columns:[
            {name: 'Name', type: 'string'},
            {name: 'Last_name', type: 'string'},
            {name: 'Age', type: 'number'},
            {name: 'Cellphone', type: 'string'}, 
            { name: 'PersonId', type: 'string' }, 
        ]
    })
  ]
})