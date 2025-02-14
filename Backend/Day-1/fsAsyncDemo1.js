const { promises } = require("dns");
const { readFile } = require("fs");
const fspromises=require("fs/promises");

const myReadFile=()=>{
    return fspromises.readFile('dummy.txt','utf-8');
}
module.exports={myReadFile,}