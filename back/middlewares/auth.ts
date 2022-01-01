import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-token')
  if (!token) {
    return res.status(401).json({
      error: 'Missing Token'
    })
  }
  try {
    const payload = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED
    )

    console.log(payload)
  } catch (err) {
    return res.status(401).json({
      error: 'Not Valid Token'
    })
  }

  next()
}
