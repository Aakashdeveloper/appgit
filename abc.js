/*var a = 10;

function add(){
    var b = 20;
    return a+b;
}


for(i=0;i<5;i++){
    let b = 20;
    console.log(a+b+i)
}

console.log("a>>>>",a)
console.log("b>>>>",b)

/////////////////
var myarray = [];

for(let i=0;i<3;i++){
    myarray[i]=function(){
        console.log("I am in function "+i)
    }
}


for(j=0;j<3;j++){
    myarray[j]()
}

////////
function add(a,b){
    return a+b
}
////////Arrow//////

const add = (a,b) => { return a+b}

//////////////////
IFFI/self invoking
///////
(function(){
    console.log('ffff')
}())
/////////////////

function loop(a){
    for(i=0;i<a;i++){
        console.log(i)
    }
}


function * loop(a){
    for(i=0;i<a;i++){
        yield i
    }
}

var data = loop(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()


//////////

var add = function(a,b){
    return a+b
}
*/

a =10
var b =20
console.log(add(a,b))

function add(a,b){
    return a+b
}

var a;

//////
var a =10
var b = 20
function add(a,b){
    return a+b
}
console.log(add(a,b))

/////////////
