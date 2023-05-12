$(document).ready(function() {

  $(".loader").hide();
  
    $("#Evaluate").click(function() {
      $(".loader").show();
      var input=$("#input").val();
      $.ajax({
        url: "https://pythonapi-mu.vercel.app/Evaluate?param1="+input,
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
    window.location.href = "http://127.0.0.1:5500/part2.html";
});


  function GETPART1Q(ee)
  {
    $.ajax({
      url: "https://ieltsaiprep.github.io/IELTS_PART1/"+ee+".txt",
      type: "GET",
      dataType: "text",
      success: function(data) {
        $("#part1Question").html(data);
        $('#Load').hide();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error: " + errorThrown);
      }
    });
  }

 

  function random_num()
  {
    var randomNumber = Math.floor(Math.random() * 121) + 1;
    GETPART1IMG(randomNumber);
    GETPART1Q(randomNumber);
   
  }

  function GETPART1IMG(ee)
 {
var image = $("#myImage");
image.attr("src", "https://ieltsaiprep.github.io/IELTS_PART1/"+ee+".jpg");
image.attr("alt", "New Image");
  }

  function Part1()
  {
    random_num();
    var image = $('#myImage');
    var container = $('#container');
    image.load(function() {
        var containerWidth = container.width();
        var containerHeight = container.height();
        var aspectRatio = image.width() / image.height();
        if (containerWidth / containerHeight > aspectRatio) {
            image.width(containerWidth);
            image.height(containerWidth / aspectRatio);
        } else {
            image.height(containerHeight);
            image.width(containerHeight * aspectRatio);
        }
        var top = (containerHeight - image.height()) / 2;
        var left = (containerWidth - image.width()) / 2;
        image.css({
            'position': 'absolute',
            'top': top + 'px',
            'left': left + 'px'
        });
    });
  }

 
 
  Part1();

  
});

