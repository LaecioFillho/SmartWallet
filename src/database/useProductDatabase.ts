import { useSQLiteContext } from "expo-sqlite"

export type ProductDatabase = {
  id: number
  name: string
  quantity: number
}

export type userWallet = {
  id: number
  email: string
  password: string
}

export type createCategories = {
  id: number
  description: string
}

export function useProductDatabase() {
  const database = useSQLiteContext()

  async function createCategory(description: string) {
    const statement = await database.prepareAsync(
      "INSERT INTO RegisterCategory (description) VALUES ($description)"
    )
    try {
      const result = await statement.executeAsync({
        $description: description
      })
      const insertedRowId = result.lastInsertRowId.toLocaleString()
      return { insertedRowId }
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function searchBCategory(description: string) {
    try {
      const query = "SELECT * FROM RegisterCategory WHERE description LIKE ?"

      const response = await database.getAllAsync<createCategories>(
        query,[`%${description}%`]
      )
      return response
    } catch (error) {
      throw error
    }
  }

  async function removeCategory(id: number) {
    try {
      await database.execAsync("DELETE FROM RegisterCategory WHERE id = " + id)
    } catch (error) {
      throw error
    }
  }






  async function create(data: Omit<ProductDatabase, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO products (name, quantity) VALUES ($name, $quantity)"
    )

    try {
      const result = await statement.executeAsync({
        $name: data.name,
        $quantity: data.quantity,
      })

      const insertedRowId = result.lastInsertRowId.toLocaleString()

      return { insertedRowId }
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function createUser(data: Omit<userWallet, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO RegisterUser (email, password) VALUES ($email, $password)"
    )

    try {
      const result = await statement.executeAsync({
        $email: data.email,
        $password: data.password,
      })

      const insertedRowId = result.lastInsertRowId.toLocaleString()

      return { insertedRowId }
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function verifyUser(email: string) {
    try {
      const query = "SELECT * FROM RegisterUser WHERE email = ?"

      const response = await database.getAllAsync(query,
        `%${email}%`,
      )

      return response
    } catch (error) {
      throw error
    }
  }

  async function searchByName(name: string) {
    try {
      const query = "SELECT * FROM products WHERE name LIKE ?"

      const response = await database.getAllAsync<ProductDatabase>(
        query,[
        `%${name}%
        `]
      )
      return response
    } catch (error) {
      throw error
    }
  }

  async function update(data: ProductDatabase) {
    const statement = await database.prepareAsync(
      "UPDATE products SET name = $name, quantity = $quantity WHERE id = $id"
    )

    try {
      await statement.executeAsync({
        $id: data.id,
        $name: data.name,
        $quantity: data.quantity,
      })
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function remove(id: number) {
    try {
      await database.execAsync("DELETE FROM products WHERE id = " + id)
    } catch (error) {
      throw error
    }
  }

  async function show(id: number) {
    try {
      const query = "SELECT * FROM products WHERE id = ?"

      const response = await database.getFirstAsync<ProductDatabase>(query, [
        id,
      ])

      return response
    } catch (error) {
      throw error
    }
  }

  return { createCategory, searchBCategory, removeCategory, create, searchByName, update, remove, show, verifyUser, createUser }
}
