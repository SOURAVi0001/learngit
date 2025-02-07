const fs=require('fs');
let bodyObject;
const requestListner = (req,res) =>{
  if(req.url==='/'){
      res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Start</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome Bhai</h1>');
        res.write("<a href='/calculator'>calculator</a>");
        res.write('</body>');
        res.write('</html>');
        res.end();
  }
  else if(req.url==='/calculator'){
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
        res.write('<head><title>Start</title></head>');
        res.write('<body>');
        res.write('<h1>Enter inputs:-</h1>');
        res.write('<form action="/submit-details" method="POST">');

        //                    INPUTS                   //

        res.write('<label for="num1">Num1</label>');
        res.write('<input type="number" name="num1" placeholder="Enter num1!"/><br/>');
        res.write('<label for="num2">Num2</label>');
        res.write('<input type="number" name="num2" placeholder="Enter num2!" /><br/>');
        //
        
        res.write('<br><input type="submit" value="Submit" />');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
  }
  else if(req.url==="/submit-details" && req.method == "POST"){
      const body=[];
      req.on('data',chunk =>{
            body.push(chunk);
      });
      req.on('end',()=>{
            const fullBody=Buffer.concat(body).toString();
            const params=new URLSearchParams(fullBody);
            bodyObject=Object.fromEntries(params);
            fs.writeFileSync("data.txt", JSON.stringify(bodyObject, null, 2), 'utf-8');
            res.statusCode=302;
            res.setHeader('Location','/calculate-result');
            res.end();
      })
  }
  else if(req.url==='/calculate-result'){
      let x=0;
      for (const [key, val] of Object.entries(bodyObject)) {
            x += Number(val); // Safely convert values to numbers
        }
      res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Start</title></head>');
        res.write('<body>');
        res.write(`<h1>Bhai ans is : ${x}</h1>`);
        res.write('</body>');
        res.write('</html>');
        res.end();
  }
}
module.exports=requestListner;