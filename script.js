$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");

           $('#love-message').fadeIn(500);
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");

           $('#love-message').fadeOut(500); 
    }
   
});
