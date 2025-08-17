import type { Kysely } from 'kysely';
import { sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable('user')
		.addColumn('id', 'text', (col) => col.primaryKey().notNull())
		.addColumn('name', 'text', (col) => col.notNull())
		.addColumn('email', 'text', (col) => col.notNull().unique())
		.addColumn('emailVerified', 'boolean', (col) =>
			col.notNull().defaultTo(false)
		)
		.addColumn('login', 'text')
		.addColumn('role', 'text', (col) => col.notNull())
		.addColumn('image', 'text')
		.addColumn('imageSmall', 'text')
		.addColumn('createdAt', 'timestamp', (col) =>
			col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
		)
		.addColumn('updatedAt', 'timestamp', (col) =>
			col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
		)
		.execute();

	// Create index on email for faster lookups
	await db.schema
		.createIndex('user_email_idx')
		.on('user')
		.column('email')
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable('user').execute();
}
