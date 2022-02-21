module.exports= reqFilter = (req,resp,next) => {
   if(!req.query.age){
      resp.send("Enter Your age first");
   }else if(req.query.age < 18){
      resp.send("Your age is not 18 yet");
   }else{
      console.log('Filter');
      next();
   }
}