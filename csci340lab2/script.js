$(document).ready(function() {  
    $('#pActivity').click(function() {
        $.ajax({
            dataType: "json",
            url: "https://www.boredapi.com/api/activity",
            success: function(message) {
              console.log(message["activity"]);
              $("#pActivity").text(message["activity"]);
            },
            error: function(xhr,status,error) {
              console.log(error);
            console.log(results);
            }
        });
    });
    $('#avatarImg').click(function() {
        $.ajax({
            dataType: "json",
            url: "https://randomfox.ca/floof/",
            success: function(message) {
              console.log(message["image"]);
              $("#avatarImg").attr("src", message["image"]).attr("width", "200px");
            },
            error: function(xhr,status,error) {
              console.log(message["error"]);
            console.log(message);
            }
        });
    });
});

                          

  
