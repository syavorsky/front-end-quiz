(function(){
    
    $('#items li').live('click', function(){ console.log('(3) Assigned with live()'); });
    
    $('#items').delegate('li', 'click', function() { console.log('(2) Assigned with delegate()'); });
                                                 
    $('#items li').click(function(){ console.log('(1) Assigned with click()'); });
                                      
}(jQuery));