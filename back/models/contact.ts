import { DataTypes } from 'sequelize'
import db from '../db/connections'

const Contact = db.define('contact',
  {
    name: {
      type: DataTypes.STRING
    },
    surname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    }
  }, )

  export default Contact