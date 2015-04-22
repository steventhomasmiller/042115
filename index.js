function x(y){

};

var z = 12;

var f = function(y){ //functions are self-contained
  var x = y;
  x+= 12;
  return x;
};

var x = f(1); //13;

var g = function(fn) {
  var result = fn(1); //this is where function is executed
  console.log(result);
};

g(f); //g is executed

// var fibonacci = [1, 1, 2, 3, 5, 8];
// fibonacci.forEach(function(item) {
//   console.log(item * 2);
// });


// fibonacci.sort(function(a,b){
//   if (a < b) return 1;
//   if (a > b ) return -1;
//   return 0;
// });

//output function
var adder = function(first){
  return function(second){
    return first + second;
  }
};

var add5 = adder(5);
var result = add5(10); //15
console.log("add5 + 10", result);

//@param list = an array to be processed
//@param f = a function to be called on each item
var each = function(list, f) {
  //loop through list
  for (var i = 0; i < list.length; i++){
    //f is passed an item and its index
    var item = list[i];
    f(item, i);
  }
};

var names = ["Alice", "Bob","Carla"];
var greet = function(name, index){
  console.log("Hello, " + name + " (#" + index + ")");
};

each(names, greet);
