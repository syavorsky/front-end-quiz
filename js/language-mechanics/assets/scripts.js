var v1 = null,
    v2 = null;

(function(){

    var v1 = 'V-one';

    v2 = 'V-two';

    f1 = function() {
        console.log('(3):', v1, v2);
    };

    var f2 = function() {
        console.log('(4):', v1, v2)
    } 

    console.log('(1):', v1, v2);
  
}());


console.log('(2):', v1, v2);
f1();
f2();