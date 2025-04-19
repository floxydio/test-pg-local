import postgres from 'postgres'
import { configDotenv } from 'dotenv'

configDotenv()

const sql = postgres({
    host: process.env.DB_IP,
    port: 54320,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    debug: true
})

export default sql