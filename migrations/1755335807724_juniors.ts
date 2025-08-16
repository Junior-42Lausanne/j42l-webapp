import type { Kysely } from 'kysely'
import { sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
        .createTable('junior')
        .addColumn('id', 'uuid', col => col.primaryKey().notNull().defaultTo(sql`gen_random_uuid()`))
        .addColumn('schoolIdentifier', 'text', col => col.notNull())
        .addColumn('name', 'text', col => col.notNull())
        .addColumn('description', 'text', col => col.notNull())
        .addColumn('image', 'text')
        .addColumn('createdAt', 'timestamp', col =>
            col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
        )
        .addColumn('updatedAt', 'timestamp', col =>
            col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
        )
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable('junior').execute()
}