import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import { getJWT } from '../helpers/auth'
import User from '../models/user'

export const loginUser = async(req: Request, res: Response) => {
  const { body } = req

  try {
    const user = await User.findOne({
      where: {
        email: body.email
      }
    })

    if (!user) {
      return res.status(400).json({
        error: 'Invalid email or password.'
      })
    }
    const verifyPass = bcrypt.compareSync(body.password, user.password)
    if (!verifyPass) {
      return res.status(400).json({
        error: 'Invalid email or password.'
      })
    }
    const token = await getJWT(user.id, user.email)
    res.json({ token })
  } catch (error) {
    // to.do errores
  }
}

export const signUser = async(req: Request, res: Response) => {
  const { body } = req

  try {
    const emailExisted = await User.findOne({
      where: {
        email: body.email
      }
    })

    if (emailExisted) {
      return res.status(400).json({
        error: `Contact ${body.email} Already Exist`
      })
    }

    const user = new User(body)

    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(user.password, salt)

    await user.save()
    res.json(user)
  } catch (err) {
    // to.do errores
  }
}

export const refreshUserToken = async(req: Request, res: Response) => {
  const { body } = req
  try {
    const user = await User.findOne({
      where: {
        email: body.email
      }
    })

    if (!user) {
      return res.status(400).json({
        error: 'User not exist error'
      })
    }

    const token = await getJWT(user.id, user.email)
    res.json({ token })
  } catch (error) {
    // to.do errores
  }

  const token = await getJWT(body.id, body.email)
  res.json({ token })
}
