$( document ).ready(function() {
  console.log( "ready!" );
  $("p").css("background-color","blue");
  $("h1").text("Dogs!");
  $('<button/>', {
        text: Generate,
        id: avatarButton,
        click: function () { alert('hi'); console.log("button works!")}
  }); 
  $("#avatarButton").appendTo("#p1");
}
//https://avatars.dicebear.com/api/:sprites/:seed.svg
  //https://www.boredapi.com/api/activity
  
