
import jwt from 'jsonwebtoken'

export const getJWT = async(id: string, name: string) => {
  return new Promise((resolve, reject) => {
    const payload = { id, name }

    jwt.sign(payload, process.env.SECRET_JWT_SEED, {
      expiresIn: '1h'
    }, (err, token) => {
      if (err) {
        console.log(err)
        reject('JWT Token Error')
      }
      resolve(token)
    })
  })
}
