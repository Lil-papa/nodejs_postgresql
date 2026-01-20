import pool from "../db.js"

export class PostController {
    async createPost(req, res) {
        const {title, content, user_id} = req.body
        const newPost = await pool.query('INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *', [title, content, user_id])
        res.json(newPost.rows[0])
    }

    async getPostsByUser(req, res) {
        const id = req.query.id
        const posts = await pool.query('SELECT * FROM post WHERE user_id = $1', [id])
        res.json(posts.rows)
    }
}