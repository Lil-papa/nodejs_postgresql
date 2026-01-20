import pool from "../db.js"

export class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newPerson = await pool.query(
            `INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *`,
            [name, surname]
        )
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = await pool.query('SELECT * FROM person')
        res.json(users.rows) 
    }

    async getOneUser(req, res) {
        const id = req.params.id
        const users = await pool.query('SELECT * FROM person WHERE id = $1', [id])
        res.json(users.rows[0])
    }

    async updateUser(req, res) {
        const {id, name, surname} = req.body
        const user = await pool.query('UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *', [name, surname, id])
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {

        const id = req.params.id
        const user = await pool.query('DELETE FROM person WHERE id = $1 RETURNING *', [id])
        res.json(user.rows[0])
    }
}

