import type { Kysely } from 'kysely';
import { sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable('session')
		.addColumn('id', 'text', (col) => col.primaryKey().notNull())
		.addColumn('userId', 'text', (col) =>
			col.notNull().references('user.id').onDelete('cascade')
		)
		.addColumn('token', 'text', (col) => col.notNull().unique())
		.addColumn('expiresAt', 'timestamp', (col) => col.notNull())
		.addColumn('ipAddress', 'text')
		.addColumn('userAgent', 'text')
		.addColumn('createdAt', 'timestamp', (col) =>
			col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
		)
		.addColumn('updatedAt', 'timestamp', (col) =>
			col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
		)
		.execute();

	// Create indexes for better performance
	await db.schema
		.createIndex('session_userId_idx')
		.on('session')
		.column('userId')
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable('session').execute();
}
