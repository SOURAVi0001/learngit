const http =require('http');
const express=require('express');
const app=express();

app.use((req,res,next) =>{
      console.log(`${req.url}`);
      next();
})
app.use((req,res,next) =>{
      console.log(`${req.url}`);
      next();
})
app.use( (req,res,next) =>{
      console.log(`res.url`);
      //res.send(`<p>Hi send this to my channel!</p>`);
      next();
      
})
app.get('/',(req,res,next) =>{
      console.log("Handeling for '/'");
      res.send(`<p>Hi send this to my channel!</p>`);
      next();
})
app.get('/home',(req,res,next) =>{
      console.log("Handeling for '/'");
      res.send(`<p>na na!</p>`);
      next();
})
app.get('/contact_us',(req,res,next) =>{
      console.log("hi 1st");
      res.send(`<form action="/contact_us" method="POST"><label>Name</label><input type="text" placeholder="Enter your name!" name="name"><label>Phone no.</label><input type="number" placeholder="Enter your phone no!" name="phone no."><button>submit</button></form>`);
})
app.post('/contact_us',(req,res,next) =>{
      console.log("Soon we will reply you dear!");
      res.send('<h1>This is the main things</h1>')
})
const server=http.createServer(app);
const port=3000;
server.listen(port,() =>{
      console.log(`http://localhost:${port}`);
});