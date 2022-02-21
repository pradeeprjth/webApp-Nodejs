const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.get('/',(_,resp)=>{
   resp.render('pages/index');
});
app.get('/profile',(_,resp)=>{
   const user ={
      name:'Pradeep',
      email:'pradeep.cotocus@gmail.com',
      phone:'6265413132',
      address:'35 Co-oprative Colony Bokaro',
      skills:['php','js','css','laravel','nodejs','node_modules']
   }
   resp.render('pages/profile',{user})
})

app.get('/login',(_,resp)=>{
   resp.render('pages/login');
})
app.listen(5000)