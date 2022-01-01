import { Router } from 'express'
import { deleteContact, getContact, getContacts, postContact, putContact } from '../controllers/contacts.controller'

const router = Router()

router.get('/', getContacts)
router.get('/:id', getContact)
router.post('/', postContact)
router.delete('/:id', deleteContact)

export default router