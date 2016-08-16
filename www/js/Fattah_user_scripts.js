/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Home */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        /* your code goes here */ 
        window.history.back();
       // location.href="index.html";
        return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
