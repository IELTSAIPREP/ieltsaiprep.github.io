$(document).ready(function() {

  $(".loader").hide();
  
  $("#Evaluate").click(function() {
    $(".loader").show();
    var input=$("#input").val();
    $.ajax({
      url: "https://ieltsaiprep.pythonanywhere.com/Evaluate?param1="+input,
      type: "GET",
      dataType: "json",
      success: function(data) {
       $("#output").val(data.message);
       $(".loader").hide();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error: " + errorThrown);
        $("#output").val("Error: " + errorThrown);
        $(".loader").hide();
      }
    });
});

$("#switchpart").click(function() {
  window.location.href = "https://ieltswritingai.com/index.html";
});




function GETPART2Q()
{
  $.ajax({
    // url: "http://127.0.0.1:5000/GetQuestion",
    url: "https://pythonapi-mu.vercel.app/GetQuestion",
    type: "GET",
    dataType: "json",
    success: function(data) {
      const lines = data.message.split("\n");
      var c=lines[2];
      $("#part2Question").html(c);
      $('#Load').hide();
      
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error: " + errorThrown);
    }
  });
}
GETPART2Q();
});
