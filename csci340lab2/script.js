$(document).ready(function() {  
    $('#pActivity').click(function() {
        $.ajax({
            dataType: "json",
            url: "https://www.boredapi.com/api/activity",
            success: function(message) {
              console.log(message["activity"]);
              console.log(activity);
              $("#pActivity").text(message["activity"]);
            },
            error: function(xhr,status,error) {
              console.log(error);
            console.log(results);
            }
        });
    });
});

                          

  
