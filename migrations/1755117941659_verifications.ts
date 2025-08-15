import type { Kysely } from 'kysely';
import { sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable('verification')
		.addColumn('id', 'text', (col) => col.primaryKey().notNull())
		.addColumn('identifier', 'text', (col) => col.notNull())
		.addColumn('value', 'text', (col) => col.notNull())
		.addColumn('expiresAt', 'timestamp', (col) => col.notNull())
		.addColumn('createdAt', 'timestamp', (col) =>
			col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
		)
		.addColumn('updatedAt', 'timestamp', (col) =>
			col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
		)
		.execute();

	// Create indexes for better performance
	await db.schema
		.createIndex('verification_identifier_idx')
		.on('verification')
		.column('identifier')
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable('verification').execute();
}
