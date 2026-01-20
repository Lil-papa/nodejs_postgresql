import { Router } from "express"
import { PostController } from "../controller/post.controller.js"

const router = new Router()
const postController = new PostController()

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByUser)


export default router
