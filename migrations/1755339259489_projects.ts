import type { Kysely } from 'kysely'
import { sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('project')
    .addColumn('id', 'text', col => col.primaryKey().notNull())
    .addColumn('juniorId', 'text', col => col.notNull())
    .addColumn('name', 'text', col => col.notNull())
    .addColumn('description', 'text', col => col.notNull())
    .addColumn('status', 'text', col => col.notNull())
    .addColumn('createdAt', 'timestamp', col =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .addColumn('createdBy', 'text')
    .addColumn('updatedAt', 'timestamp', col =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .addForeignKeyConstraint(
      'project_junior_fk',
      ['juniorId'],
      'junior',
      ['id'],
      (cb) => cb.onDelete('restrict')
    )
    .addForeignKeyConstraint(
      'project_user_fk',
      ['createdBy'],
      'user',
      ['id'],
      (cb) => cb.onDelete('set null')
    )
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('project').execute()
}
