import { DataTypes } from 'sequelize'
import db from '../db/connections'

const History = db.define('change_histories',
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
    },
    id_contact: {
      type: DataTypes.NUMBER
    }
  }, )

  export default History