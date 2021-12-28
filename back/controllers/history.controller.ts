
import { Request, Response } from 'express';
import History from '../models/history';

export const getHistory = async (req: Request, res: Response) => {
  const { id } = req.params
  
  const history = await History.findAll({
    where: {
      id_contact: id
    }
  })

  if (history) {
    res.json(history) 
  } else {
    res.status(404).json({
      error: `No history with the id: ${id}`
    })
  }

}
