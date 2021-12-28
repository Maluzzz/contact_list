import express, { Application } from 'express'
import cors from 'cors'

import contactsRouter from '../routes/contacts.routes'
import historyRoutes from '../routes/history.routes'
import db from '../db/connections'

class Server {

  private app: Application
  private port: string
  private paths = {
    contacts: '/api/contacts',
    history: '/api/history'
  }
  
  constructor() {

    this.app = express()
    this.port = process.env.PORT || '3000'
    
    this.dbConection()
    this.middlewares()
    this.routes()
   
  }
  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  async dbConection() {
    try {
      
      await db.authenticate()
      console.log('Database Connected')
      
    } catch (error)
    {
      throw new Error(error.message)
    }
  }
  routes() {
    this.app.use(this.paths.contacts, contactsRouter)
    this.app.use(this.paths.history, historyRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port: '+ this.port)
    })
  }

}

export default Server