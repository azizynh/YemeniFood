/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    $(document).on("click", ".uib_w_7", function(evt)
    {
        /* your code goes here */
        window.history.back();
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
