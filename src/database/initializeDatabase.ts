import { type SQLiteDatabase } from "expo-sqlite"

export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      quantity INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS RegisterUser (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS RegisterCategory (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Releases (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      value DECIMAL(10, 2) NOT NULL,
      category TEXT NOT NULL,
      total DECIMAL(10, 2)
    );


    CREATE TABLE IF NOT EXISTS BalanceWallet (
      id INTEGER,
      value DECIMAL(10, 2) NOT NULL
    );

  `)
}
