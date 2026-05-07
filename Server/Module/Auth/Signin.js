const connect = require("../../sql")
let connection
connect()
.then((output)=>{
    connection = output
    console.log("connection live on signup");
})
.catch((error)=>{
    console.log(error);
})

const signin = async(req, res) =>{
    const email = req.body?.emailAdress
    const password = req.body?.password
    if (!email || !password) {
        return res.status(400).json({Message: "Please input all value"})
    }
    const command = 'SELECT * FROM `user_cred` WHERE email_address=?'
    const value = [email]
    const [query] = await connection.execute(command, value)
    console.log(query);
    if (query.length == 0) {
        return res.status(400).json({message: "No account found with the email address"})
    }
    if (query[0]?.password != password) {
        return res.status(400).json({message: "incorrect password"})
    }
    res.status(201).json({message: {...query[0], password: null}})
}
module.exports = signin