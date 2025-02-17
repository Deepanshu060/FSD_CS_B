const http=require("http");
const port=3004;
const server=http.createServer((req,res)=>{
const data=[{
    "id": 1,
    "name": "Deepanshu",
    "email": "dp@gmail.com"
},{
    "id": 2,
    "name": "Abhijeet",
    "email": "pt@gmail.com"
},{
    "id": 3,
    "name": "Aman",
    "email": "aj@gmail.com"
}];
data.map((i)=>{
     const rdata="<h1>"+i.name+" "+i.email+"</h1><br/>";
     res.write(rdata);
})
res.end();
});

server.listen(port,(err)=>{
 try{
    if(err) throw err;
    console.log(`server is running on port ${port}`);
 }
 catch(err){
    console.log("Server Error:",err.message)}
})