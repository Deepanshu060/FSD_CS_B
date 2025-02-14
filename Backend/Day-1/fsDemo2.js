const { myReadFile, myWriteFile, myAppendFile, myDeleteFile } = require('./fsDemo1');
require('./fsDemo1.js')
const data='my json file data';
myReadFile();
myWriteFile();
myReadFile();
const data1='\nmy username and password is admin';
myAppendFile(data1);
myReadFile()
myDeleteFile();
