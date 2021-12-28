import { Request, Response } from 'express';
import Contact from '../models/contact';
import History from '../models/history';

export const getContacts = async (req: Request, res: Response) => {
  const contacts = await Contact.findAll()

  res.json(contacts)

}

export const getContact = async (req: Request, res: Response) => {
  
  const { id } = req.params
  
  const contact = await Contact.findByPk(id)

  if (contact) {
    res.json(contact) 
  } else {
    res.status(404).json({
      error: `No User with the id: ${id}`
    })
  }
 

}

export const postContact = async (req: Request, res: Response) => {
  
  const { body } = req

  try {

    const emailExisted = await Contact.findOne({
      where: {
        email: body.email
      }
    })

    if (emailExisted){
      return res.status(400).json({
        error: `Contact ${body.email} Already Exist`
      })
    }

    const contact = new Contact(body)
    
    await contact.save()
    res.json(contact)

  } catch (error) {

    res.status(500).json({
        error: 'Server internal Error'
      })
  }

}


export const putContact = async (req: Request, res: Response) => {
  
  const { body } = req
  const { id } = req.params
  
  try {

    const contact = await Contact.findByPk(id)
    const history = new History({...body, 'id_contact': parseInt(id)})
    if (!contact){
      return res.status(400).json({
        error: `Contact with ${id} doesn't Exist`
      })
    }

    await contact.update(body)
    history.save()
    res.json(contact)

  } catch (error) {

    res.status(500).json({
        error: 'Server internal Error'
      })
  }


}

export const deleteContact = async(req: Request, res: Response) => {
  
  const { id } = req.params
  try {

    const contact = await Contact.findByPk(id)


    if (!contact){
      return res.status(400).json({
        error: `Contact with ${id} doesn't Exist`
      })
    }

    await contact.destroy()
    await History.destroy({
      where: {
        id_contact: id
      }
    })

    res.json({
        success: 'Removed success'
    })

  } catch (error) {

    res.status(500).json({
        error: 'Server internal Error'
      })
  }

 
}