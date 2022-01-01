import { Router } from 'express'
import { loginUser, refreshUserToken, signUser } from '../controllers/auth.controllers'
import { verifyToken } from '../middlewares/auth'

const router = Router()

router.post('/login', loginUser)
router.post('/signup', signUser)
router.get('/refresh-token', verifyToken, refreshUserToken)

export default router
