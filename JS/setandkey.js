const mymap=new Map([
    ["key1",234],
    [23,"javaScript"],
    ["key2","Go language"]
]);
console.log(mymap.get(23));
console.log(mymap.get("key1"));
mymap.set(9,"Java");
console.log(mymap);
const myset = new Set();
myset.add(23);
myset.add(31);
myset.add(33);
myset.add(23);
console.log(myset);