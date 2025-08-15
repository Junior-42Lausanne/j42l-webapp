import type { Kysely } from 'kysely';
import { sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable('account')
		.addColumn('id', 'text', (col) => col.primaryKey().notNull())
		.addColumn('userId', 'text', (col) =>
			col.notNull().references('user.id').onDelete('cascade')
		)
		.addColumn('accountId', 'text', (col) => col.notNull())
		.addColumn('providerId', 'text', (col) => col.notNull())
		.addColumn('accessToken', 'text')
		.addColumn('refreshToken', 'text')
		.addColumn('accessTokenExpiresAt', 'timestamp')
		.addColumn('refreshTokenExpiresAt', 'timestamp')
		.addColumn('scope', 'text')
		.addColumn('idToken', 'text')
		.addColumn('password', 'text')
		.addColumn('createdAt', 'timestamp', (col) =>
			col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
		)
		.addColumn('updatedAt', 'timestamp', (col) =>
			col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
		)
		.execute();

	// Create indexes for better performance
	await db.schema
		.createIndex('account_userId_idx')
		.on('account')
		.column('userId')
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable('account').execute();
}
