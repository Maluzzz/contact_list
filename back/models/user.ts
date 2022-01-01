import { DataTypes } from 'sequelize'
import db from '../db/connections'

const User = db.define('users',
  {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  })

export default User
