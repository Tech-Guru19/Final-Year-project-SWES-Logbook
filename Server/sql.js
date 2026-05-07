const mysql = require("mysql2/promise")


const connectSql = async () => {
    try {
        const connection = await mysql.createConnection({
            user: "root",
            password: "",
            host: "localhost",
            database: "ethereal_company"
        })
        return connection

    } catch (error) {
        console.log(error);

    }
}
module.exports = connectSql