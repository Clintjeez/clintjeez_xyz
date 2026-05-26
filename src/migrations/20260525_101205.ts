import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-vercel-postgres'

// Schema was already applied via dev-mode auto-push.
// This migration exists only to sync the payload_migrations tracking table.
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {}
