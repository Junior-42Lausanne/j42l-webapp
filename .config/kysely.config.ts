import { defineConfig } from 'kysely-ctl';
import { Pool } from 'pg';

export default defineConfig({
	// replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
	dialect: 'pg',
	dialectConfig: {
		pool: new Pool({
			database: process.env.POSTGRES_DB,
			host: 'localhost',
			user: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			port: 5432,
			max: 10,
		}),
	},
	migrations: {
		migrationFolder: 'migrations',
	},
	//   plugins: [],
	//   seeds: {
	//     seedFolder: "seeds",
	//   }
});
