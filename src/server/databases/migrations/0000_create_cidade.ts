import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";
import { table } from "console";


export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable(ETableNames.cidade, table => {
    table.bigIncrements('id').primary().index().unique(),
    table.string('nome', 150).checkLength('<=', 150).index(),

    table.comment('Tabela de cidades')
  }).then(() => {
    console.log(`# Created Table ${ETableNames.cidade}`)
  }
)
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable(ETableNames.cidade)
  .then(() => {
      console.log(`# Deleted Table ${ETableNames.cidade}`)
    }
  )

}
