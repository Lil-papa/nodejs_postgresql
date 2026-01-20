import { Router } from "express"
import { UserController } from "../controller/user.controller.js"

const router = new Router()
const userController = new UserController()

router.post('/user', userController.createUser.bind(userController))
router.get('/user', userController.getUsers.bind(userController))
router.get('/user/:id', userController.getOneUser.bind(userController))
router.put('/user', userController.updateUser.bind(userController))
router.delete('/user/:id', userController.deleteUser.bind(userController))

export default router
