//for the given json iterate over all for loops (for, for in, for of, foreach)
var jsonData ={
    "one": [11, 12, 13, 14, 15],
    "two": [21, 22, 23],
    "three": [31, 32]
 }
 for (var i = 0;i<jsonData.one.length;i++)
 //for the given json iterate over all for loops (for)
 {
     console.log(jsonData.one[i]);
 }
 for (var i in jsonData.two)
//for the given json iterate over all for loops (for in loops)
 {
     console.log(jsonData.two[i]);
 }
 for(var i of jsonData.three)
 //for the given json iterate over all for loops (for of loops)
 {
     console.log(i);
 }
const oii=["1","2","3","4","5","6","7","8","9"]
 oii.forEach(element => console.log(element));
 //for the given json iterate over all for loops (for each loop)