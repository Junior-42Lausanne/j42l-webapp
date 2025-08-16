import type { Kysely } from 'kysely'
import { sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('application')
    .addColumn('id', 'uuid', col => col.primaryKey().notNull().defaultTo(sql`gen_random_uuid()`))
    .addColumn('userId', 'text')
    .addColumn('positionId', 'uuid', col => col.notNull())
    .addColumn('createdAt', 'timestamp', col =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .addColumn('updatedAt', 'timestamp', col =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .addForeignKeyConstraint(
      'application_user_fk',
      ['userId'],
      'user',
      ['id'],
      (cb) => cb.onDelete('set null')
    )
    .addForeignKeyConstraint(
      'application_position_fk',
      ['positionId'],
      'project_position',
      ['id'],
      (cb) => cb.onDelete('cascade')
    )
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('application').execute()
}
