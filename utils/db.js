import mysql from "mysql2/promise"

const dbpool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "prakerja",
    port: 3306
})

export default dbpool