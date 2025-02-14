const http= require("http");
const fs=require("fs/promises");
const server=http.createServer(async(req,res)=>{
    const url=req.url;
    if(url=="/home" && req.method=="GET"){
        const data=await fs.readFile("Home.html");
        res.write(data);
    }
    else if(url==="/about" && req.method=="GET"){
        const data=await fs.readFile("About.html");
        res.write(data);
    }
    else{
        res.write("<h1>No page Available</h1>");
    }
    res.end();
})
server.listen(3001,()=>{
    try{
        if(err) throw err;
        console.log("Server is running on port 3001");
    }
    catch(err){
        console.log("Server Error ",err.message);

    }
})