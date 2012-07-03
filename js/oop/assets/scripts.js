function MyClass1 () {
  this.say_hi = function() {
    console.log('MyClass1 says HI!');
  };
}

function MyClass2 () {}

MyClass2.prototype.say_hi = function() {
  console.log('MyClass2 says HI!');
};

var inst1 = new MyClass1(),
    inst2 = new MyClass2();

inst1.say_hi();
inst2.say_hi();
  
 