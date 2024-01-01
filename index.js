const exprexss = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors")
const app = exprexss();
const path = require('path')

require("dotenv").config();

app.use(exprexss.json());
app.use(exprexss.static(path.join(__dirname+"/pubilc")))
app.use(
    cors({
      origin: "*",
    })
  );
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

app.post('/send-mail',(req,res)=>{
    const {name,email,message} = req.body;

    const mailOption = {
        from: name,
        to: "1900460100058prateeksingh@gmail.com",
        subject:email,
        text:message
    }

    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            console.error(error)
            return res.status(500).json({
                success:false,
                message: error.toString()
            })
        }
        return res.status(200).json({
            success:true,
            message: info.response
        })
    })
})


app.listen(4000, () => {
  console.log("app started on port 4000");
});

