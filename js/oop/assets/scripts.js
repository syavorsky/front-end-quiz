function MyClass2() {
  var name;

  this.set_name = function(n) {
    name = n;
  };

  this.get_name = function() {
    return name;
  };
};

  MyClass2.prototype.say_hi = function() {
    console.log('Hi, my name is ' + this.get_name());
  };

function MyClass1() {
  var name;

  this.set_name = function(n) {
    name = n;
  };

  this.get_name = function() {
    return name;
  };

  this.say_hi = function() {
    console.log('Hi, my name is ' + this.get_name());
  };
};

var myClass3 = ( function() {
    var name;
    return {

      set_name : function(n) {
        name = n;
      },

      get_name : function() {
        return name;
      },

      say_hi : function() {
        console.log('Hi, my name is ' + this.get_name());
      }
    };
}());

var inst2 = new MyClass2()

inst2.set_name("Robert 2");
console.log(inst2.name);
console.log(inst2.get_name());
inst2.say_hi();


 myClass3.set_name("Robert MyClass3");
 console.log(myClass3.name);
 console.log(myClass3.get_name());
 myClass3.say_hi();

