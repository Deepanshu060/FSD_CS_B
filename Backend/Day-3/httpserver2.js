const http =require("http");
const port=3002;
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-type","application/json");
    res.statusCode=200;
    const data= await fetch("http://dummyjson.com/recipes");
    const jsonndata= await data.json();
    const newjsondata = jsonndata.recipes;
    const names = newjsondata.map((re)=>{
        return re.name;
    })
    res.end(JSON.stringify(names));
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
