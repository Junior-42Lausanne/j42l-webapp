import type { Kysely } from 'kysely'
import { sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('project_position')
    .addColumn('id', 'uuid', col => col.primaryKey().notNull().defaultTo(sql`gen_random_uuid()`))
    .addColumn('projectId', 'uuid', col => col.notNull())
    .addColumn('name', 'text', col => col.notNull())
    .addColumn('description', 'text', col => col.notNull())
    .addColumn('count', 'integer', col => col.notNull())
    .addColumn('createdAt', 'timestamp', col =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .addColumn('updatedAt', 'timestamp', col =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .addForeignKeyConstraint(
      'project_position_project_fk',
      ['projectId'],
      'project',
      ['id'],
      (cb) => cb.onDelete('cascade')
    )
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('project_position').execute()
}
