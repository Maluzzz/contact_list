import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

const dbName = dotenv.config().parsed?.DATABASE_NAME || ''
const dbUser = dotenv.config().parsed?.DATABASE_USERNAME || ''
const dbPass = dotenv.config().parsed?.DATABASE_PASSWORD || ''
const dbHost = dotenv.config().parsed?.DATABASE_HOST || ''

const db = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: 'mariadb'
})

export default db
