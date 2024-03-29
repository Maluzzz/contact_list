import { Router } from 'express'
import { getHistory } from '../controllers/history.controller'

const router = Router()

router.get('/:id', getHistory)

export default router
