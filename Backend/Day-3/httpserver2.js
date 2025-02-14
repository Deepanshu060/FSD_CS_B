const http =require("http");
const port=3002;
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-type","text/html");
    res.statusCode=200;
    const data= await fetch("http://dummyjson.com/recipes");
    const jsonndata= await data.json();
    const newjsondata = jsonndata.recipes;
    newjsondata.map((re)=>{
        const rdata="<h1 style='color:red' >"+re.name+"</h1>";
        res.write(rdata)
    })
    res.end();
});
server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log(`Server is running on port ${port}`);
    }
    catch(err){
        console.log("Server Error ",err.message());

    }

})
