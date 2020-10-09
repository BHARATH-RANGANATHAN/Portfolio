const express=require("express");
const sendMail=require("./mail");
const app=express();
const path=require("path");

app.use(express.urlencoded({extended:false}));
app.use(express.static("assets"));
app.use(express.json());

app.post("/email",(req,res)=>{
  const{subject,email,text}=req.body
console.log("Data:",req.body);
sendMail(email,subject,text,function(err,data){
  if(err){
    res.status(500).json({message:"Internal error"});
  }else{
    res.json({message:"Email sent"});
  }
});
});

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"views","index.html"));
});

app.listen(process.env.PORT || 3000,()=>console.log("listening to port 3000"));
