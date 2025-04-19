import postgres from 'postgres'
import { configDotenv } from 'dotenv'

configDotenv()

console.log(process.env.USER)
console.log(process.env.DB_IP)
console.log(process.env.PW)
console.log(process.env.DB_NAME)

const sql = postgres({
    host: process.env.DB_IP,
    port: 54320,
    username: process.env.USER,
    password: process.env.PW,
    database: process.env.DB_NAME,
    debug: true
})

export default sql