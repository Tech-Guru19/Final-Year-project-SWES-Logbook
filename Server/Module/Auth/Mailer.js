const emailjs = require("@emailjs/nodejs")
const allBasic = require("../../BasicFX")
emailjs.init({
    publicKey: 'xET-6G5nkOIlnhBWz',
    privateKey: 'buIjBrbcfRf3AqhwPUnAB',
})

const mailUser = (email) =>{
    const randomValue = allBasic.getRandom()
    emailjs.send('service_d4x9phq', 'template_irryds5', {
        email: "israeladekola8@gmail.com",
        OTP: randomValue
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
        console.log('FAILED...', err);
    });
}
module.exports = mailUser