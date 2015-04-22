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

var fibonacci = [1, 1, 2, 3, 5, 8];
fibonacci.forEach(function(item) {
  console.log(item * 2);
});
