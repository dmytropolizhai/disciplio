import * as SQLite from 'expo-sqlite'

export const DATABASE_NAME = 'tasks.db';

export const db = SQLite.openDatabaseSync(DATABASE_NAME)
