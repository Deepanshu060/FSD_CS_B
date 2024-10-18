const mypromise=new Promise(
    (resolve,reject)=>{
        console.log("Executed promise");
        // resolve("All set")
        reject("Network error");
    }
);
mypromise.then((message)=>console.log(msg)).catch((err)=>console.log("Error :",err));