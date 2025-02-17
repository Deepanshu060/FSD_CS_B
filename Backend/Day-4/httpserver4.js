const http=require("http");
const port=3005;
const server =http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.statusCode=200;
        const data = await fetch("https://dummyjson.com/recipes");
        const jsondata= await data.json();
        const newData = jsondata.recipes;
        newData.map((re)=>{
            const rdata="<h1>"+re.name+"</h1>";
            res.write(rdata);
        })
        res.write(JSON.stringify(newData));
        res.end();




});
server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log('server is running on port ${port}');
    }
    catch(err){
        console.log("Server Error:", err.message);
       }

})