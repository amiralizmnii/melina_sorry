const express=require('express');
const axios=require('axios');
require('dotenv').config();
const app=express();
app.use(express.json());

app.post('/forgive',async(req,res)=>{
 const answer=req.body.answer;
 const text=answer==='yes'
 ?'🎉 ملینا روی «آره، می‌بخشمت» کلیک کرد.'
 :'💔 ملینا گزینه «هنوز نه...» را انتخاب کرد.';
 try{
  await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,{
   chat_id:process.env.CHAT_ID,text
  });
  res.json({ok:true});
 }catch(e){
  res.status(500).json({ok:false,error:e.message});
 }
});
app.listen(process.env.PORT||3000);
