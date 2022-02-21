const express = require('express');
const reqFilter = require('./middleware')
const app = express();
const route = express.Router();


route.use(reqFilter);

app.set('view engine', 'ejs');

app.get('/',(req,resp)=>{
   resp.render('pages/index');
});

app.get('/profile',(req,resp)=>{
   const user ={
      name:'Pradeep',
      email:'pradeep.cotocus@gmail.com',
      phone:'6265413132',
      address:'35 Co-oprative Colony Bokaro',
      skills:['php','js','css','laravel','nodejs','node_modules']
   }
   resp.render('pages/profile',{user})
})

route.get('/login',(req,resp)=>{
   resp.render('pages/login');
})

app.listen(5000)