
$('#pActivity').click(function() {
    $.ajax({
      dataType: "jsonp",
      url: "https://www.boredapi.com/api/activity",
      success: function() {
        $('#pActivity').text("http://www.boredapi.com/api/activity?key=5881028");
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  }); 
  //
  
