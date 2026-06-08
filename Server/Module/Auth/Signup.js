const connect = require("../../sql")
const crypto = require("crypto")
const mailer = require("./Mailer")
let connection
connect()
.then((output)=>{
    connection = output
})
.catch((error)=>{
    console.log(error);
})

const signup = async(req, res)=>{
    console.log(req.body);
    const email = req.body?.emailAdress
    const fullName = req.body?.fullName
    const randomValue = crypto.randomUUID()
    const Matriculation_No = req.body?.Matriculation_No
    const Instituition_Mail = req.body?.Instituition_Mail
    const department = req.body?.department
    const password = req.body?.password
    if (!email || !fullName || !password || !Matriculation_No || !Instituition_Mail ||!department) {
        res.status(501).json({message: "Please provide all credentials"})
        return
    }
    const command = 'INSERT INTO user_cred (Full_Name, email_address,Matriculation_No, random_id, Instituition_Mail, department, password) VALUES (?,?,?,?,?,?,?)'
    const values = [fullName, email, Matriculation_No, randomValue, Instituition_Mail, department, password]
    try {
        const [result] = await connection.execute(command, values)
        const sendOTP = await mailer(email)
        if (sendOTP?.error) {
            res.status(400).json({message: sendOTP?.error})
        }
        console.log("omoh",sendOTP);
        
        const saveUserOTPCommand = ('INSERT INTO OTP_Verication_Table (email_address, OTP_Code) VALUES  (?,?)')
        const value = [email, sendOTP]
        const executeMail = await connection.execute(saveUserOTPCommand, value)
        res.status(201).json({message: "Account created successfully, please check your mail to confirm"})
        console.log(result);
        
    } catch (error) {
        res.status(501).json({message: "Error saving to database"})
        console.log(error);
    }
}

module.exports = signup