function addNums(a,b){
    console.log(a+b);
}
try{
    //throw new ReferenceError();
    //throw new TypeError();
    addNums("a",4)


}catch(err){
    console.log(err)
}
console.log('program not stop')

var str = "Hello";
console.log(str.match("jello"));

try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }


    try {
        console.log('hello)
        } catch(e) {
        console.log('caught')
        }