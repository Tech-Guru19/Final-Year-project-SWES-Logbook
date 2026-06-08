const express = require("express")
const app = express();
const cors = require("cors")
const allBasic = require("./BasicFX.js")
const connectSql = require("./sql.js")
app.use(cors());
app.use(express.json());
const signup = require("./Module/Auth/Signup.js")
const signin = require("./Module/Auth/Signin.js");
const mailUser = require("./Module/Auth/Mailer.js");

// require('dotenv').config();
let connection
connectSql()
.then(async(output)=>{
    connection = output
    console.log("database is running");
    
})
.catch((error)=>{
    console.log(error);
})
const serverPort = process.env.PORT || 5687
app.post("/auth/signup", signup)
app.post("/auth/signin", signin)




app.get("/sendMail", (req, res) => {
    console.log(req.body);
})
app.get('/', (req, res) => {
    // res.json({ 'message': "I am running perfectly well" })
})

app.listen(serverPort, () => {
    console.log(`lift off !!! server is running at ${serverPort}`);

})

