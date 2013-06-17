(function(){
    
    $('#items li').live('click', function(){ console.log('(3) Assigned with live()'); });
    
    $('#items').delegate('li', 'click', function() { console.log('(2) Assigned with delegate()'); });
                                                 
    $('#items li').click(function(){ console.log('(1) Assigned with click()'); });



    document.addEventListener("click", function(e){
      var srcElement = e.srcElement || e.target;
      if((srcElement.nodeName == "LI") && (srcElement.parentNode.id = "items")){
        console.log('(3) Assigned with live JS');
      }
    }, false);

    var ul = document.getElementById('items');
    ul.addEventListener("click", function(e){
      var srcElement = e.srcElement || e.target;
      if((srcElement.nodeName == "LI") ){
        console.log('(2) Assigned with delegate JS');
      }
    }, false); 
    
    var liNodes = ul.getElementsByTagName('li');
    console.log(liNodes)
    var li;
    for(var i = 0; i < liNodes.length;i++){
        liNodes[i].addEventListener("click", function(e){
        console.log('(1) Assigned with bind JS');
      }, false);
    }
}(jQuery));