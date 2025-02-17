const http=require("http");
const port=3006;
const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.statusCode=200;
    
    const users=[{
        "id":1,
        "name":"Adarsh",
        "email":"ak@gamil.com"
    },{
        "id":2,
        "name":"Akshat",
        "email":"ak@gamil.com"
    }]
    const url=req.url;
    if(url=="/users" && req.method=="GET"){
        // users.map((re)=>{

        // })
        res.write(JSON.stringify(users))

    }
    if(url=="/users" && req.methos=="POST"){
        // const id=req.body.id;
        // const name=req.body.name;
        const {id,name,email}=req.body;
        const jsondata={id,name,email};
        users.push_back(jsondata);
        res.write(jsondata);
    }
    res.end();


})
server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log("Server is running");
    }
    catch{
        console.log("Server error",err.message);
    }

})
