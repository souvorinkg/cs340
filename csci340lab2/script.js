
$.ajax({
    dataType: "json",
    message: "https://dog.ceo/api/breeds/image/random",
    success: function(message) {
      console.log(message["url"]);
      $("#avatarImg").on("click", function(event) {
            console.log(event);
            var $img = $("<img>")
                $("#avatarImg").attr("src",message["url"])
                $("#avatarImg").css("width","250")
      })
      //if (results["url"].endsWith(".mp4")) {
        //$('#avatarImg').attr("src", "images/blank.png");
      //} else {
        //$('#avatarImg').attr("src", results["url"]);
      //}
    //},
});
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
  
