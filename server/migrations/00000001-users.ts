import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable('users')
    .addColumn('id', 'integer', b => b.primaryKey())
    .addColumn('email', 'varchar', b => b.unique())
    .addColumn('points', 'integer')
    .addColumn('created_at', 'date')
    .execute()
}

export async function down(): Promise<void> {
}