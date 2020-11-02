require('dotenv').config();
import { createTransport } from "nodemailer";
import mailGun from "nodemailer-mailgun-transport";

const auth={
  auth:{
    api_key:process.env.API_KEY,
    domain:process.env.DOMAIN
  }
};

const transporter = createTransport(mailGun(auth));


const sendMail=(email,subject,text,cb)=>{
const mailOptions={
  from:email,
  to:"bharathr181096@gmail.com",
  subject,
  text
};
transporter.sendMail(mailOptions,function(err,data){
  if(err){
    cb(err,null);
  }else{
    cb(null,data);
  }
});
}
export default sendMail;
