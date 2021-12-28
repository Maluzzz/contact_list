import { Sequelize } from 'sequelize'
import * as pg from 'pg'

const db = new Sequelize('db4ssjebp0ok5k', 'rhkvtuumiuatim', '1df9f105024b8782e929f523cf8d567b41a420ddbcd99a94830a697227978395', {
  host: 'ec2-3-213-76-170.compute-1.amazonaws.com',
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
}
})

export default db