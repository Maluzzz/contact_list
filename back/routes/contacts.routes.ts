import { Router } from 'express'
import { deleteContact, getContact, getContacts, postContact, putContact } from '../controllers/contacts.controller'

const router = Router()

router.get('/', getContacts)
router.get('/:id', getContact)
router.put('/:id', putContact)
router.post('/', postContact)
router.delete('/:id', deleteContact)

export default router